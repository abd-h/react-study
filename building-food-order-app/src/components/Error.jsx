
const Error = ({ title, message, onConfirm }) => {
    // console.log(message);
    return (
      <section>
        <h2 className="text-red-600">{title}</h2>
        <p className="text-red-600">{message}</p>
      </section>
    );
}

export default Error;