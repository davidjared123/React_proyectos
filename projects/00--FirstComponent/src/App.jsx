import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const users = [
    {
      name: "David Pérez",
      userName: "davidjared123",
      isFollowing: true,
    },
    {
      name: "Moroni Aminadi",
      userName: "moroniaminadi",
      isFollowing: true,
    },
    {
      name: "Marta Hernandez",
      userName: "martahernandez",
      isFollowing: false,
    },
    {
      name: "Amber Smith",
      userName: "ambersmith",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      {users.map((user) => {
        const { name, userName, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            initialIsFollowing={isFollowing}
            userName={userName}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
