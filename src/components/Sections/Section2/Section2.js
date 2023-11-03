import React from 'react'
import './Section2.scss';
import { useLocation } from 'react-router-dom';
import { Add, Star } from '@mui/icons-material';
import { useFavorites } from '../../FavoriteList/FavoriteList';
import { useAdds } from '../../AddList/AddList';

export const Section2 = () => {
    const location = useLocation();
    const shouldHide = location.pathname === '/contact';
    const { favorites } = useFavorites();
    const { adds } = useAdds();
    console.log(favorites);
    return (
        <div className={shouldHide ? 'hidden' : ''}>
            {/* Contenido de Section1 */}
            <div class="Section2">
                <div className='cards'>
                    <div className='card-favorites'>
                        <div className='icon-star'>
                            <Star className='star'/>
                        </div>
                        <div>
                            {favorites.map((favorite, index) => (
                                <div key={index} className='card'>
                                    <img src={favorite.image} alt={favorite.title} className='img-list' />
                                    <div className='info'>
                                        <h2 className='title' >{favorite.title}</h2>
                                        <p className='description'>{favorite.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='card-add'>
                        <div className='icon-add'>
                            <Add className='add'/>
                        </div>
                        <div>
                            {adds.map((add, index) => (
                                <div key={index} className='card-add2'>
                                    <img src={add.image} alt={add.title} className='img-list-add' />
                                    <div className='info-add'>
                                        <h2 className='title-add' >{add.title}</h2>
                                        <p className='description-add'>{add.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
