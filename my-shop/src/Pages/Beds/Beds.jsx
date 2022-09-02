import React from 'react'

import Search from '../../Companents/Search'

export default function Beds(props) {
        let beds = [ {
        id: "b1",
        title: "Rauch Memphis Alpine White Carcase with Silk Grey Front Overbed with Shelf Unit For 160cm Bed",
        name:"BedsImages/111.jpg",
        brands: "Rauch Furniture",
        dimensions: "H 210cm x W 215cm x D 41cm",
        description: "Rauch Memphis contemporary design allow this overbed unit to coordinate easily with almost any décor and color scheme. The filigree modern furniture offers a variety of clever and beautiful storage solutions -especially for small rooms. This storage overbed unit provides a great solution to the increasing problem of bedroom storage, and also features has folding doors and shelf unit.",
        price:"$500.23"
      },
      {
        id: "b2",
        title: "Rauch Memphis Alpine White Wide Overbed with Door Unit For 140cm Bed",
        name:"BedsImages/222.jpeg",
        brands: "Rauch Furniture",
        dimensions: "H 210cm x W 243cm x D 41cm",
        description: "Rauch Memphis contemporary design allow this overbed unit to coordinate easily with almost any décor and color scheme. The filigree modern furniture offers a variety of clever and beautiful storage solutions -especially for small rooms. This storage overbed unit provides a great solution to the increasing problem of bedroom storage, and also features has folding doors and shelf unit.",
        price:"$553.22"
      },
      {
        id: "b3",
        title: "Rauch Rivera Alpine White Overbed for Beds with Wall Panel and Book Storage for Divan Bed (W 160cm x 200cm)",
        name:"BedsImages/333.jpg",
        brands: "Rauch Furniture",
        dimensions: "H 212cm x W 263cm x D 55cm",
        description: "Uno Mulberry Dining Chair is a must to add to any dining table as it brings that much needed flair and style to your dining experience. A carver chair which is contemporary in its styling, Sumptuous dressed in its velvet fabric and strong standing on its pyramid base. Three delicious colours are available, on trend Grey, cool blue and vibrant Citron all of which will add a touch of glamour and designer style to your dining table.",
        price:"$799.22"
      },
      {
        id: "b4",
        title: "Wiemann Luxor3 Comfort Bed for Overbed Unit",
        name:"BedsImages/444.jpg",
        brands: "Wiemann Furniture",
        dimensions: "W 215cm x H 220cm x D 58cm W 235cm x H 220cm x D 58cm W 255cm x H 220cm x D 58cm W 250cm x H 220cm x D 58cm W 270cm x H 220cm x D 58cm W 290cm x H 220cm x D 58cm",
        description: "Offering a stunning warm and natural appearance to your bedroom, the Luxor3 Wooden Bed would be a wonderful addition to any bedroom whether traditional in style or bright and colourful. Beautifully finished to create a wonderful fresh feel, the Luxor bed will lift the brightness of your bedroom and offer a touch of class to both modern and traditional settings. This bed frame available in range of size options, this bed frame available in pyrmont cherry repro, golden maple repro, light ash repro, rustic oak finish, polar larch finish options, This bed frame available in 3 different headboard options, with book rest, space saving comfort bed, with bedding box in headboard, This  bed available in different style options,",
        price:"$520.41"
      }]
  return (
    <div>
      <Search arr={beds} add={props.onAdd} />    
    </div>
  )
}
