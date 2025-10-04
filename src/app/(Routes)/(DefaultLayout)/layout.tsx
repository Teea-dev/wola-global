import Footer from "@/app/_global-components/footer";
import Nav from "@/app/_global-components/navbar";

interface PropsType {
  children: React.ReactNode;
}

export default function RouteLayout({ children }: PropsType) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
