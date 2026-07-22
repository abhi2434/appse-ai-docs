import Link from '@docusaurus/Link';
 
type ConnectAccountButtonProps = {
  appName: string;
  authorizeUrl: string;
};
 
export default function ConnectAccountButton({
  appName,
  authorizeUrl,
}: ConnectAccountButtonProps) {
  return (
    <div style={{ textAlign: 'center', margin: '1.5em 0' }}>
      <Link
        className="button button--primary button--lg"
        to={authorizeUrl}
      >
        {`Connect your ${appName} Account`}
      </Link>
    </div>
  );
}
