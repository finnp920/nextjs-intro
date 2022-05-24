import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1 className="active">Hi</h1>
      <style jsx>{`
        a {
          color: blue;
        }
      `}</style>
    </div>
  );
}
