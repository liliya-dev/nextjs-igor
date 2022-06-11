import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import { COLORS } from "../components/atoms/Buttons/MyButton/MyButton";
import { SIZES } from "../components/atoms/Buttons/MyButton/MyButton";
import Button from "../components/atoms/Buttons/MyButton/MyButton";
import Clock from "../components/atoms/clock/Clock";

export default function Home() {
  const router = useRouter();
  const homemove = () => {
    router.push("/");
  };

  return (
    <Layout>
      <div className="min-w-full">
        <main>
          <div className="flex justify-around w-full mb-10">
            <Button size="sm" color="danger" onClick={homemove}>
              Move Home
            </Button>
          </div>

          <p> lorem</p>
          <div className={"bottom-10 flex "}>
            <Clock />
          </div>
        </main>
      </div>
    </Layout>
  );
}
