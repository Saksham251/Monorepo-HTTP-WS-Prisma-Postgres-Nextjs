import {client} from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      3wdwindiowjdfowjqdfwpozjpd
      {user?.username}
      {user?.password}
    </div>
  );
}
