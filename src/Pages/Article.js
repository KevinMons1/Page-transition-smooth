import React, { useEffect } from 'react';

export default function Article() {

  useEffect(() => {
    document.querySelector("main").style.display = "block"
  })

  return (
    <>
      <p className="article-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit maiores amet dolorem consequatur laboriosam ullam veniam suscipit quae atque! Repellendus asperiores nam dolorum maxime, ullam doloribus ex eligendi aut a nulla eum pariatur atque aliquid repellat. Aliquid ad provident nemo! Alias voluptatem veniam repellat, totam, modi eaque hic itaque beatae molestias possimus incidunt architecto, quas eius fugit perferendis velit. Molestias optio voluptatem temporibus iusto cupiditate vitae ipsam! Eaque possimus totam asperiores a dolorem quas culpa impedit nesciunt, doloribus error labore ab, nobis reprehenderit sit assumenda quisquam temporibus, est ipsam. Maxime sit dolor inventore optio maiores beatae repellat ab consectetur voluptatem repudiandae enim, laudantium ipsum molestiae reprehenderit aliquam nihil blanditiis aut. Eligendi asperiores molestias maxime, ratione amet doloremque quae ut tempora unde itaque ab animi dolores dolorum veritatis exercitationem incidunt eum suscipit ullam? Corporis nisi debitis architecto pariatur perspiciatis doloribus, fuga, dignissimos, nam omnis blanditiis quisquam molestiae ab? Soluta, libero?
      </p>
    </>
  )
}
