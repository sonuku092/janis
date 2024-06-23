import React from "react";

export default async function VideoComponent() {
    // const src = await getVideoSrc("https://www.youtube.com/watch?v=LqP1TIkklrE&ab_channel=KaranjitNarang");
   
    return <iframe src={'https://www.youtube.com/watch?v=LqP1TIkklrE&ab_channel=KaranjitNarang'} frameborder="0" allowfullscreen />
  }