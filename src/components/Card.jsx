import React from 'react'
import star from '../assets/star.svg'
import katie from '../assets/katie.png'

export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'sold out'
  } else if (props.item.location == 'Online') {
    badgeText = 'Online'
  }

  return (
    <div className="card">
      <div className="img-wrap">
        {badgeText && <div className="status">{badgeText}</div>}

        <img
          src={`./../src/assets/${props.item.coverImg}`}
          className="photo"
          alt=""
        />
      </div>
      <p className="rating info">
        <img src={star} className="star" alt="" /> {props.item.rating}{' '}
        <span className="contrast">
          ({props.item.stats.reviewCount})-{props.item.location}
        </span>
      </p>
      <p className="name info">Life lessons with {props.item.title}</p>
      <p className="price info">
        <span className="strong">From ${props.item.price}</span> / person
      </p>
    </div>
  )
}
