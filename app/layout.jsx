import "@/assets/styles/globals.css";

export const metadata = {
  title: "Real state Properties",
  keywords: "rental, property, real state",
  description: "find the perfect rental prperty",
};
1;

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
