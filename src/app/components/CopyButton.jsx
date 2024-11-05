import Image from 'next/image';

const CopyButton = ({ text }) => {
  const copyToClipboard = (copyText) => {
    navigator.clipboard.writeText(copyText);
  };

  return (
    <button onClick={() => copyToClipboard(text)} className="copy-btn" aria-label="Copy to clipboard">
      <Image src="/images/copy.png" alt="Copy Icon" width={20} height={20} />
    </button>
  );
};
export default CopyButton;
