import Button from "./components/Button";
import ThemeChanger from "./components/ThemeChanger";

export default function Home() {
  return (
    <>
      <ThemeChanger />
      <div className="flex items-center justify-center my-5 gap-5 w-[80%] mx-auto">
        <Button intent={"primary"} size={"xs"}>Button </Button>
        <Button intent={"destructive"} size={"sm"}>Button </Button>
        <Button intent={"primary"} size={"md"}>Button </Button>
        <Button intent={"outline"} size={"lg"}>Button </Button>
      </div>
      <div className="w-[500px] mx-auto">
        <Button fullWidth rounded={"full"}>link</Button>
      </div>
    </>
  );
}

