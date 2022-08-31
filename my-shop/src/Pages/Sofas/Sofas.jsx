import React from 'react'
import Search from '../../Companents/Search'

export default function Sofas(props) {
        let sofas = [ {
        id: "s1",
        title: "Ciara Charcoal Manual Recliner Armchair",
        name:"SofasImages/111.jpg",
        brands: "Exclusive Sofas and Chairs",
        dimensions: "W 99cm x D 91cm x H 108cm, Seat Height: 50cm",
        description: "Combining the ultimate in style and comfort, Ciara Charcoal Recliner Armchair is the perfect example of the longevity of great design. Its traditional design combines high comfort with neat tailoring and compact proportions. The contrast piping in the back cushions is a unique design feature. It comes with pocket sprung foam and fibre interior seat cushions which provide a comfy sit whist giving support with low maintenance. Back cushions and arm pads have fibre sewn in for additional comfort and support.",
        price:"$522.50"
      },
      {
        id: "s2",
        title: "GFA Dubai Tan Plush Swivel Recliner Chair with Footstool",
        name:"SofasImages/222.jpg",
        brands: "GFA Furniture",
        dimensions: "Chair : H107cm x W80cm x D84cm, Stool : H44cm x W44cm x D49cm",
        description: "The Dubai compliments any modern-day living space. Upholstered in a variety of contemporary colours, it benefits from a 360-degree swivel and an easy to use recline mechanism which is completed with a sumptuous back for added support. The GFA Dubai swivel recliner chair comes complete with matching footstool and the two together compliment any modern day living space.",
        price:"$366.70"
      },
      {
        id: "s3",
        title: "Furniture Line Enzo Putty Leather 3EE+2E+1E Electric Recliner Sofa Set",
        name:"SofasImages/333.jpg",
        brands: "Furniture Line",
        dimensions: "3 Seater Sofa: H98cm x W194cm x D92cm, 2 Seater Sofa: H98cm x W154cm x D92cm, Recliner armchair: H98cm x W107cm x D92cm",
        description: "Enzo Putty Leather Electric Recliner Sofa Set suits both traditional and modern interiors with its classic meet contemporary style. This stunning on trend range not only boasts good looks but comfort as well. Hidden beneath the sumptuous leather hides the pocket sprung seating and gentle padding for the neck and arm rests. Comes in Putty finish make it a perfect fit for modern interiors, simply add bright bold cushions to give a pop of colour in a trendy Putty scheme or blend with more subtle colours for a calm chilled out feel to a living space.",
        price:"$3,576.30"
      },
      {
        id: "s4",
        title: "Furniture Line Enzo Putty Leather 3+2+1 Sofa Set",
        name:"SofasImages/444.jpg",
        brands: "Furniture Line",
        dimensions: "3 Seater Sofa: H98cm x W194cm x D92cm, 2 Seater Sofa: H98cm x W154cm x D92cm, Armchair: H98cm x W107cm x D92cm",
        description: "Enzo Putty Leather 3+2+1 Sofa Set has been designed to look fabulous into any living room space. This stunning on trend range not only boasts good looks but comfort as well. Hidden beneath the sumptuous leather hides the pocket sprung seating and gentle padding for the neck and arm rests. Comes in Putty finish make it a perfect fit for modern interiors, simply add bright bold cushions to give a pop of colour in a trendy Putty scheme or blend with more subtle colours for a calm chilled out feel to a living space.",
        price:"$2,786.55"
      },
      {
        id: "s5",
        title: "Adora Poesia Italian 3 Seater Sofa",
        name:"SofasImages/555.jpg",
        brands: "Adora Interiors",
        dimensions: "W 240cm x D 95cm x H 86cm",
        description: "Poesia Italian 3 Seater Sofa is suitable for most room sizes and will provide you with a lifetimes use. Expertly crafted from luxury fabric upholstery with contrasting piping and elegant bronze feetcreating a warm, homely atmosphere in any living room. This 3Seater Sofa will provide you with thick padded armrest combining with the deep cushions to give you a relaxing sitting position with long lasting comfort. This sofa is available in different colors to best suit the design of your home.",
        price:"$3,597.75"
      },
      {
        id: "s6",
        title: "Arredoclassic Elisium Italian 3 Seater Sofa Bed",
        name:"SofasImages/666.jpg",
        brands: "Arredo Classic Italian",
        dimensions: "W 248cm x D 238cm x H 92cm",
        description: "Elisium Italian 3 Seater Sofa Bedhas convertible from plush sofa to handy guest bed for visiting friends or relatives will make for a useful addition to any living room or spare bedroom. Built rich fabric upholstery with walnut or golden effect frame will make for a superb addition to any modern lounge interior.This Sofa Bed features thick padded upholstery for excellent comfort and support.",
        price:"$4,070.63"
      },
      {
        id: "s7",
        title: "Malaga Dark Grey Manual Recliner 3+2 Sofa Set",
        name:"SofasImages/777.jpg",
        brands: "Exclusive Sofas and Chairs",
        dimensions: "3 Seater: W 180cm x D 99cm x H 98cm, 2 Seater: W 130cm x D 99cm x H 98cm, Seat Height: 47cm",
        description: "Malaga Dark Grey 3+2 Sofa Set adds real warmth and comfort to your living room. Including 3 and 2 Seater Manual Recliner Sofa has elegant lines with a high back and a three tiered cushion, upholstered in a cosy yet hard wearing fabric. This Sofa has well-padded seats featuring pocket springs topped with foam and Dacron fibre wrap offer superb support and luxurious comfort. Manually activated recline function as standard.",
        price:"$1,328.10"
      }]
  return (
    <div>
        <Search arr={sofas} add={props.onAdd} changeModal={props.changeModal}/>
    </div>
  )
}
