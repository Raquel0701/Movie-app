import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-1 fixed bottom-0 w-full z-10 bg-gradient-to-br">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">© 2025 Movie DRDT. Todos los derechos reservados.</p>
          <p className="text-sm">
            Hecho con ❤️ por Diana Raquel Diaz Tapia. Para más información, visitame{" "}
            <Link href="https://sites.google.com/view/dianaraquel" className="text-blue-400 hover:text-blue-600">ahora!</Link>.
          </p>
        </div>
      </footer>
  );
};

export default Footer;
