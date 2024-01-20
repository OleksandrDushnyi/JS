//  import {row, col, css} from './utils'

//  function title (block) {
//     const {tag = 'h1', styles } = block.options
//     return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
//     // const tag = block.options.tag ?? 'h1'
//     // const styles = block.options.styles
//     // return `
//     // <div class="row" style="${css(styles)}"
//     //  <div class="col-sm">
//     //      <${tag}>${block.value}</${tag}, css(styles)>
//     // </div>
//     // </div>
//     // ` 
// }
//  function text(block){
// // return `
// // <div class="row">
// // <div class="col-sm" >
// //     <p>${block.value}</p>
// // </div>
// // </div>
// // `
// return row(col(`<p>${block.value}</p>`), css(block.options.styles))

// }

//  function columns(block){ 
//     //const html = block.value.map(item => `<div class="col-sm">${item}</div>`) 
//         // return ` 
//         // <div class="row" > 
//         // ${html.join('')} 
//         // </div> 
//         // ` 
//        const html = block.value.map(col).join('')
//        return row(html, css(block.options.styles))
//     } 
    
// function image(block) {
// // return `
// // <div class="row">
// // <img src="${block.value}" />
// // </div>
// // `
// const {imageStyles: is, alt = '', styles} = block.options
// return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}"/>`, css(block.options.styles))
// }
// export const templates = {
//     title,
//     text,
//     image,
//     columns
// }


