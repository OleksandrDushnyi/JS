import {body} from 'express-validator'

export const loginValidation = [
    body('email', 'Неправильний формат пошти ').isEmail(),
    body('password', 'Пароль повинен бути мінімум 5 символів').isLength({min: 5}),
]

export const registerValidation = [
    body('email', 'Неправильний формат пошти ').isEmail(),
    body('password', 'Пароль повинен бути мінімум 5 символів').isLength({min: 5}),
    body('fullName', 'Вкажіть імя').isLength({min:3}),
    body('avatarUrl', 'Неправильна силка на аватарку').optional().isURL()

]

export const postCreateValidation = [
    body('title', 'Введіть заголовок статті').isLength({min:3}).isString(),
    body('text', 'Введіть текст статті').isLength({min:3}).isString(),
    body('tags', 'Неправильний формат тегів вкажіть масив').optional().isString(),
    body('imageUrl', 'Неправильна силка на зображення').optional().isString()

]