import styled from 'styled-components';

export const SeriesCard =({data})=>{

    const  Button = styled.button`
    background-color: ${({hit , average})=> data.rating>=8.5?hit:average};
    padding:.5rem;
    display:inline-block;
    max-width:10em;;
    margin :1rem auto;
    border-radius:1rem;
    font-size:1rem;
    font-weight:700;
    `
    
    const Rating = styled.span`
    background-color: ${({hit , average})=> data.rating>=8.5?hit:average};
    display:inline-block;
    width:6em;
    border-radius:2rem;
    `

    const {name,img_url,rating,description,cast,genre,watch_url} = data;
    return  <li className="flex flex-col">
                   <img className="w-[100%]" src={img_url} alt={name}/>
                    <h2 className="text-2xl">Name: {name}</h2>
                    <Rating hit={"#08ff47"} average={"#988007"}>Rating: {rating}</Rating>
                    <p>Summary- {description}</p>
                    <p>Genre- {genre}</p>
                    <p>Cast: {cast}</p>
                    <Button hit={"#08ff47"} average={"#988007"}><a href={watch_url}>Watch Now</a></Button>
                </li>
}