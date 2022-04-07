import React from "react";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const Playlist = ({ playlist }) => {
  console.log(playlist);
  return <div>playlist</div>;
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.SB_ACCESS_TOKEN);
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  const stringify = JSON.stringify(playlist);
  const data = JSON.parse(stringify);

  return {
    props: {
      playlist: data,
    },
  };
};

export default Playlist;
