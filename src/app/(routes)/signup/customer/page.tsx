//src/app/(routes)/signup/customer/page.tsx
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import SignUpCustomer from "../component/SignUp";

export default function SignUp() {
  return (
    <main>
         <NavBar />
         <SignUpCustomer />
         <Footer />
    </main>
  );
}