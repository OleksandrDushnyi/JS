import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock( 'Курси IT',{
    tag: 'h2',
        
    styles: {
        background: 'linear-gradient(to right, hwb(223 3% 62%), hwb(224 0% 89%))',
        color: 'hwb(210 64% 25%)',
        padding: '1.5rem',
        'text-align': 'center'

    }
    
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2px 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
          width: '100%px',
          height: 'auto'
        },
        alt: 'Це картинка'
    }),

    new ColumnsBlock(
        [
        'Навчишся застосовувати CSS/HTML',
        'Отримаєш навики Java Script',
        'Також знання з React'
        ], {
            styles: {
                background: ' linear-gradient(to bottom, #8e2de2, #4a00e0)',
                color: '#fff',
                padding: '2rem 0 2rem 10rem' ,
                'font-weight': 'bold'
            }
        }),
new TextBlock( 'Тут багато інтересного матеріалу: <a href="#"> курси </a>',
    {
styles:{
color: 'hwb(210 64% 25%)',
background: 'linear-gradient(to right, hwb(223 3% 62%), hwb(224 0% 89%))',
padding: '1rem',
'font-weight': 'bold',
        }
    })
    
]