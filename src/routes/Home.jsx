import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import postsApi from '../api/api';
import { Title } from '../components/Title';

export const Home = () => {
  const [dados, setDados] = useState([]);

  useEffect(() =>{
    const getDados = async ()=> {
      try {
        const response = await postsApi.get(`/posts`)
        const jBody = await response.data;
        setDados(jBody);

      } catch (error) {
        console.log(error);
      }
    }
    getDados();
  }, [])

  return (
    <div className="Home">
      <Title>
        last posts
      </Title>

      {
        dados.length === 0 ?
        <p>Loading...</p>

        : (
          dados.map(({title, body, id}) => (
            <div className="box" key={id}>
              <h3>{title}</h3>
              <p>{body}</p>

              <Link to={`/post/${id}`} className="btn" title="read more">
                  Read More
              </Link>
            </div>
          ))
        )
      }
    </div>
  )
}
