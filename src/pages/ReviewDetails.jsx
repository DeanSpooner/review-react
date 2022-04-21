import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title,
          rating,
          body
        }
      }
    }
  }
`

const ReviewDetails = () => {

  const { id } = useParams();

  const { loading, error, data } = useQuery(REVIEW, {
    variables: {
      id: id
    }
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='review-card'>
      <h2>{data.review.data.attributes.title}</h2>
      <p>{data.review.data.attributes.body}</p>
      <div className='rating'>{data.review.data.attributes.rating}</div>
    </div>
  )
}

export default ReviewDetails