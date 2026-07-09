type MessageProps = {
  texto: string;
};

function Message({ texto }: MessageProps) {
  return <p>{texto}</p>;
}

export default Message;