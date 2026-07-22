---
title: "XML to JSON Node"
description: "Convert XML into clean, predictable JSON so you can map it with JMESPath — with a shape that stays stable whether an element appears once or many times."
---

> Convert XML into clean, predictable JSON so you can map it with JMESPath. The JSON shape stays stable whether an element appears once or many times.

The **XML to JSON** node turns an XML document into JSON so it can flow through the rest of your workflow, where everything is JSON and every mapping uses JMESPath.

Its most important job is keeping the JSON **shape predictable**. XML doesn't tell you whether something is a list or a single value — it just repeats a tag when there's more than one. A naive converter guesses from what it sees in _this_ payload: one line item becomes an object, two become a list. Your mapping then works for a two-line order and silently returns nothing for a one-line order. This node removes that guesswork by letting **you** decide how repetition becomes arrays.

**Common uses**

- Ingesting **XML documents** (such as orders or catalogs) that arrive on a webhook.
- Reading XML from an **HTTP response**, a **file**, or any **upstream node**.
- Any workflow where a source speaks XML but your mappings need JSON.

> ℹ️ **Every example on this page uses the same sample** — a two-line order document. See [Sample XML](#sample-xml) below.

<img src="/img/platform/key-concepts/nodes/built-in/xml_to_json/canvas.png" alt="The XML to JSON node in the node menu, under Action Nodes" width="700"/>
*Add the **XML to JSON** node from the node menu (Action → Action Nodes).*

---

## How it works

1. The node reads an **XML string** from the source you point it at.
2. It converts **everything** — every element and every attribute — into JSON. You never list fields; the whole document comes across.
3. You choose **how repeated elements become arrays** (the _Element Occurrence_ setting). This is what keeps your mappings stable.
4. It outputs **one JSON item**, ready for a mapping node downstream. (To process each line item separately, add a **Splitter** node after this one.)

A few defaults worth knowing:

- **Values are text by default.** `000010` stays `"000010"` and `10.000` stays `"10.000"` — leading zeros and trailing decimals are never lost. (Numbers and true/false only appear when you supply an XSD schema — see [From XSD schema](#mode-3--from-xsd-schema).)
- **Attributes** are prefixed with `@` (e.g. `SEGMENT="1"` becomes `"@SEGMENT": "1"`).
- **Namespaces** are simplified to their local name.

---

## Configuration

<img src="/img/platform/key-concepts/nodes/built-in/xml_to_json/configuration-panel.png" alt="The XML to JSON configuration panel: XML Source, Element Occurrence, and Optionals" width="700"/>
*Point the node at your XML in **XML Source**, pick an **Element Occurrence** mode, and expand **Optionals** for formatting fields.*

### Source _(required)_

Where the XML comes from. Point it at the property holding the XML — for example the expression `{{$payload.raw}}` when a webhook delivered the body as `{"raw":"<xml>…"}`. This is the one field you can template with an expression: click the **ƒ** toggle on the field to switch it into expression mode.

### Element Occurrence _(required)_

The heart of the node — it decides which elements become **arrays**.

| Option                          | What it does                                                                                                                                                                                                        | Choose it when                                                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Always an array** _(default)_ | Every container element is an array, whether it appears once or a hundred times.                                                                                                                                    | You want zero surprises. `orders.line[*]` works for a one-line order and a ten-line order alike.                                                |
| **Based on the data**           | An element is an array only if it actually repeats in this payload; a single occurrence stays an object.                                                                                                            | You want the most natural-looking JSON and you know your data — pair it with **Always-Array Elements** to protect the fields that _can_ repeat. |
| **From XSD schema**             | Array-ness comes from your schema (`maxOccurs > 1` → array). Anything not in the schema falls back to _Based on the data_. It also turns declared numeric/boolean fields into real JSON numbers and `true`/`false`. | You have a schema (even a partial one) and want correct types on specific fields.                                                               |

### XSD Schema

Shown only when _Element Occurrence_ is **From XSD schema**. Paste your schema here. It can be **partial** — you only need to declare the elements you care about; everything else still converts. The schema is used **only** as a hint for arrays and types; your XML is never rejected for not matching it, so extra or unknown elements are always safe.

### Always-Array Elements

Shown only when _Element Occurrence_ is **Based on the data**. A list of element names (or paths) that should **always** be arrays, even when they appear once. This is how you protect line-item elements like `E1EDP01` from the single-vs-many trap.

### Formatting options _(optional)_

Expand **Optionals** in the config panel (shown above) and use **Select to add field** to reveal these. Sensible defaults apply — override only if you need to.

| Option                  | Default             | What it does                                                        |
| ----------------------- | ------------------- | ------------------------------------------------------------------- |
| **Strip Namespaces**    | On                  | Simplifies `ns:Tag` to `Tag`.                                       |
| **Drop Attributes**     | Off                 | Omits XML attributes entirely.                                      |
| **Attribute Prefix**    | `@`                 | The prefix added to attribute keys.                                 |
| **Text Node Key**       | `#text`             | The key used for the text of an element that _also_ has attributes. |
| **Empty Element Value** | `""` (empty string) | The value emitted for empty or self-closing elements.               |

---

## Steps to use

1. From the node menu, add the **XML to JSON** node to your canvas.
2. Connect it **after** the node that produces your XML (webhook trigger, HTTP call, file read, or another node).
3. In **Source**, enter the property (or expression) that holds the XML string.
4. Pick an **Element Occurrence** mode — start with **Always an array** if you're unsure.
5. (Optional) Adjust formatting options, or supply an XSD / Always-Array list for the other modes.
6. **Run** the node and check the JSON output.

---

## Sample XML

All examples below convert this two-line order document:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ORDERS05>
  <IDOC BEGIN="1">
    <EDI_DC40 SEGMENT="1">
      <TABNAM>EDI_DC40</TABNAM>
      <DIRECT>2</DIRECT>
      <IDOCTYP>ORDERS05</IDOCTYP>
      <MESTYP>ORDERS</MESTYP>
      <SNDPRT>LS</SNDPRT>
      <SNDPRN>SENDERSYS</SNDPRN>
      <RCVPRT>LS</RCVPRT>
      <RCVPRN>RECEIVERSYS</RCVPRN>
    </EDI_DC40>
    <E1EDK01 SEGMENT="1">
      <CURCY>USD</CURCY>
      <BELNR>4500001234</BELNR>
    </E1EDK01>
    <E1EDK14 SEGMENT="1"><QUALF>006</QUALF><ORGID>NB</ORGID></E1EDK14>
    <E1EDKA1 SEGMENT="1"><PARVW>AG</PARVW><PARTN>VENDOR001</PARTN><NAME1>ACME Supplies Ltd</NAME1></E1EDKA1>
    <E1EDP01 SEGMENT="1">
      <POSEX>000010</POSEX>
      <MENGE>10.000</MENGE>
      <MENEE>EA</MENEE>
      <NETPR>21</NETPR>
      <E1EDP19 SEGMENT="1"><QUALF>001</QUALF><IDTNR>MAT-1001</IDTNR><KTEXT>Steel Bracket 10mm</KTEXT></E1EDP19>
    </E1EDP01>
    <E1EDP01 SEGMENT="1">
      <POSEX>000020</POSEX>
      <MENGE>5.000</MENGE>
      <MENEE>EA</MENEE>
      <NETPR>20</NETPR>
      <E1EDP19 SEGMENT="1"><QUALF>001</QUALF><IDTNR>MAT-2002</IDTNR><KTEXT>Hex Bolt M8</KTEXT></E1EDP19>
    </E1EDP01>
  </IDOC>
</ORDERS05>
```

`E1EDP01` is the line item — it appears **twice** here. Watch how each mode treats it.

---

## Mode 1 — Always an array

**The safe default.** Every container element becomes an array, so the shape never changes with the data.

Notice `IDOC`, `EDI_DC40`, `E1EDP01`, `E1EDP19` — all arrays, even the ones that appear only once. Your mapping `ORDERS05.IDOC[0].E1EDP01[*].POSEX` works today and keeps working when an order has a single line.

```json
{
  "ORDERS05": {
    "IDOC": [
      {
        "@BEGIN": "1",
        "EDI_DC40": [
          {
            "@SEGMENT": "1",
            "TABNAM": "EDI_DC40",
            "DIRECT": "2",
            "IDOCTYP": "ORDERS05",
            "MESTYP": "ORDERS",
            "SNDPRT": "LS",
            "SNDPRN": "SENDERSYS",
            "RCVPRT": "LS",
            "RCVPRN": "RECEIVERSYS"
          }
        ],
        "E1EDK01": [{ "@SEGMENT": "1", "CURCY": "USD", "BELNR": "4500001234" }],
        "E1EDK14": [{ "@SEGMENT": "1", "QUALF": "006", "ORGID": "NB" }],
        "E1EDKA1": [
          {
            "@SEGMENT": "1",
            "PARVW": "AG",
            "PARTN": "VENDOR001",
            "NAME1": "ACME Supplies Ltd"
          }
        ],
        "E1EDP01": [
          {
            "@SEGMENT": "1",
            "POSEX": "000010",
            "MENGE": "10.000",
            "MENEE": "EA",
            "NETPR": "21",
            "E1EDP19": [
              {
                "@SEGMENT": "1",
                "QUALF": "001",
                "IDTNR": "MAT-1001",
                "KTEXT": "Steel Bracket 10mm"
              }
            ]
          },
          {
            "@SEGMENT": "1",
            "POSEX": "000020",
            "MENGE": "5.000",
            "MENEE": "EA",
            "NETPR": "20",
            "E1EDP19": [
              {
                "@SEGMENT": "1",
                "QUALF": "001",
                "IDTNR": "MAT-2002",
                "KTEXT": "Hex Bolt M8"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

> ✅ **Recommended when a document can carry one _or_ many records.** With _Always an array_ you don't need a schema or a field list — the shape is stable out of the box.

---

## Mode 2 — Based on the data

Here an element is an array **only when it repeats**. `E1EDP01` appears twice, so it's an array. Everything that appears once — `IDOC`, `EDI_DC40`, `E1EDK01`, `E1EDP19` — becomes a plain object.

```json
{
  "ORDERS05": {
    "IDOC": {
      "@BEGIN": "1",
      "EDI_DC40": {
        "@SEGMENT": "1",
        "TABNAM": "EDI_DC40",
        "DIRECT": "2",
        "IDOCTYP": "ORDERS05",
        "MESTYP": "ORDERS",
        "SNDPRT": "LS",
        "SNDPRN": "SENDERSYS",
        "RCVPRT": "LS",
        "RCVPRN": "RECEIVERSYS"
      },
      "E1EDK01": { "@SEGMENT": "1", "CURCY": "USD", "BELNR": "4500001234" },
      "E1EDK14": { "@SEGMENT": "1", "QUALF": "006", "ORGID": "NB" },
      "E1EDKA1": {
        "@SEGMENT": "1",
        "PARVW": "AG",
        "PARTN": "VENDOR001",
        "NAME1": "ACME Supplies Ltd"
      },
      "E1EDP01": [
        {
          "@SEGMENT": "1",
          "POSEX": "000010",
          "MENGE": "10.000",
          "MENEE": "EA",
          "NETPR": "21",
          "E1EDP19": {
            "@SEGMENT": "1",
            "QUALF": "001",
            "IDTNR": "MAT-1001",
            "KTEXT": "Steel Bracket 10mm"
          }
        },
        {
          "@SEGMENT": "1",
          "POSEX": "000020",
          "MENGE": "5.000",
          "MENEE": "EA",
          "NETPR": "20",
          "E1EDP19": {
            "@SEGMENT": "1",
            "QUALF": "001",
            "IDTNR": "MAT-2002",
            "KTEXT": "Hex Bolt M8"
          }
        }
      ]
    }
  }
}
```

> ⚠️ **The single-line trap.** If an order arrives with only **one** `E1EDP01`, this mode makes it an **object**, not an array — and `E1EDP01[*]` mappings quietly return nothing. Protect the fields that can repeat with **Always-Array Elements**.

**Fix it with Always-Array Elements.** Set:

```
E1EDP01
E1EDP19
```

Now `E1EDP01` and `E1EDP19` are always arrays (even with one line), while everything else keeps the natural object shape:

```json
{
  "ORDERS05": {
    "IDOC": {
      "@BEGIN": "1",
      "EDI_DC40": {
        "@SEGMENT": "1",
        "TABNAM": "EDI_DC40",
        "DIRECT": "2",
        "IDOCTYP": "ORDERS05",
        "MESTYP": "ORDERS",
        "SNDPRT": "LS",
        "SNDPRN": "SENDERSYS",
        "RCVPRT": "LS",
        "RCVPRN": "RECEIVERSYS"
      },
      "E1EDK01": { "@SEGMENT": "1", "CURCY": "USD", "BELNR": "4500001234" },
      "E1EDK14": { "@SEGMENT": "1", "QUALF": "006", "ORGID": "NB" },
      "E1EDKA1": {
        "@SEGMENT": "1",
        "PARVW": "AG",
        "PARTN": "VENDOR001",
        "NAME1": "ACME Supplies Ltd"
      },
      "E1EDP01": [
        {
          "@SEGMENT": "1",
          "POSEX": "000010",
          "MENGE": "10.000",
          "MENEE": "EA",
          "NETPR": "21",
          "E1EDP19": [
            {
              "@SEGMENT": "1",
              "QUALF": "001",
              "IDTNR": "MAT-1001",
              "KTEXT": "Steel Bracket 10mm"
            }
          ]
        },
        {
          "@SEGMENT": "1",
          "POSEX": "000020",
          "MENGE": "5.000",
          "MENEE": "EA",
          "NETPR": "20",
          "E1EDP19": [
            {
              "@SEGMENT": "1",
              "QUALF": "001",
              "IDTNR": "MAT-2002",
              "KTEXT": "Hex Bolt M8"
            }
          ]
        }
      ]
    }
  }
}
```

---

## Mode 3 — From XSD schema

Use this when you have a schema. Array-ness comes from `maxOccurs`, and declared numeric/boolean fields become **real** JSON numbers and booleans — while identifiers you leave as text keep their leading zeros.

Paste a schema — it can be **partial**. This one declares only the line item (`E1EDP01`), its nested item (`E1EDP19`), and two numeric fields; everything else is left out and simply falls back to _Based on the data_ and stays text:

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="ORDERS05">
    <xs:complexType><xs:sequence>
      <xs:element name="IDOC">
        <xs:complexType><xs:sequence>
          <xs:element name="E1EDP01" maxOccurs="unbounded">
            <xs:complexType><xs:sequence>
              <xs:element name="MENGE" type="xs:decimal"/>
              <xs:element name="NETPR" type="xs:decimal"/>
              <xs:element name="E1EDP19" maxOccurs="unbounded"/>
            </xs:sequence></xs:complexType>
          </xs:element>
        </xs:sequence></xs:complexType>
      </xs:element>
    </xs:sequence></xs:complexType>
  </xs:element>
</xs:schema>
```

Result — `E1EDP01` and `E1EDP19` are arrays (from `maxOccurs`), `MENGE`/`NETPR` are **numbers**, and `POSEX` stays `"000010"` because it isn't declared numeric:

```json
{
  "ORDERS05": {
    "IDOC": {
      "@BEGIN": "1",
      "EDI_DC40": {
        "@SEGMENT": "1",
        "TABNAM": "EDI_DC40",
        "DIRECT": "2",
        "IDOCTYP": "ORDERS05",
        "MESTYP": "ORDERS",
        "SNDPRT": "LS",
        "SNDPRN": "SENDERSYS",
        "RCVPRT": "LS",
        "RCVPRN": "RECEIVERSYS"
      },
      "E1EDK01": { "@SEGMENT": "1", "CURCY": "USD", "BELNR": "4500001234" },
      "E1EDK14": { "@SEGMENT": "1", "QUALF": "006", "ORGID": "NB" },
      "E1EDKA1": {
        "@SEGMENT": "1",
        "PARVW": "AG",
        "PARTN": "VENDOR001",
        "NAME1": "ACME Supplies Ltd"
      },
      "E1EDP01": [
        {
          "@SEGMENT": "1",
          "POSEX": "000010",
          "MENGE": 10.0,
          "MENEE": "EA",
          "NETPR": 21,
          "E1EDP19": [
            {
              "@SEGMENT": "1",
              "QUALF": "001",
              "IDTNR": "MAT-1001",
              "KTEXT": "Steel Bracket 10mm"
            }
          ]
        },
        {
          "@SEGMENT": "1",
          "POSEX": "000020",
          "MENGE": 5.0,
          "MENEE": "EA",
          "NETPR": 20,
          "E1EDP19": [
            {
              "@SEGMENT": "1",
              "QUALF": "001",
              "IDTNR": "MAT-2002",
              "KTEXT": "Hex Bolt M8"
            }
          ]
        }
      ]
    }
  }
}
```

> ℹ️ **Partial schemas are fine.** The schema is a hint, never a gatekeeper — your XML is never rejected for not matching it. Any element you didn't declare still converts normally.

---

## Formatting options in action

Take an element that has **both an attribute and text**:

```xml
<price currency="USD">21</price>
```

| Setting                     | Output                                  |
| --------------------------- | --------------------------------------- |
| Defaults                    | `{ "@currency": "USD", "#text": "21" }` |
| **Drop Attributes** on      | `"21"`                                  |
| **Attribute Prefix** = `_`  | `{ "_currency": "USD", "#text": "21" }` |
| **Text Node Key** = `value` | `{ "@currency": "USD", "value": "21" }` |

An empty element like `<note/>` becomes `""` by default — change that with **Empty Element Value**.

---

## Safe with untrusted XML

If your XML comes from a public webhook, you don't control what shows up. This node is built to fail safely: malformed XML, a hostile payload (extremely deep nesting, DTD/entity tricks, external-resource references, or an oversized document), or a broken schema all produce a **clear error on that item** — never a crash and never silent data loss.

- **Bad XML in → a clear error out**, and the rest of your run keeps going.
- **Empty input → empty output**, with no error.
- A field the schema didn't mention is **not** an error — it just falls back to data-driven.

---

## Tips

- **Not sure which mode?** Start with **Always an array**. It's the most robust and needs no extra setup.
- **Want tidy JSON but have repeating line items?** Use **Based on the data** and list those line items under **Always-Array Elements**.
- **Need real numbers or true/false?** Supply an XSD in **From XSD schema** mode — but keep identifiers like order or product codes as text so leading zeros survive.
- **Processing one line item at a time?** Add a **Splitter** node after this one; this node always emits a single JSON item.

---
