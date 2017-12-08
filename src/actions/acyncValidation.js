// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//
// const asyncValidate = (values/*, dispatch */) => {
//     return sleep(2000) // simulate server latency
//         .then(() => {
//         if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.corporateName)) {
//             throw { corporateName: 'That username is taken' }
//         } else {
//
//         }
//         if(values.corporateName) {
//             console.log('corporateNem')
//         } else {
//             throw  { corporateName: '企業名を入力してください' }
//         }
//         // if(/^([a-zA-Z0-9_¥.¥-])+¥@(([a-zA-Z0-9¥-])+¥.)+([a-zA-Z0-9]{2,4})+$/.test(values.mailAddress)) {
//         if(/@/.test(values.mailAddress)) {
//             console.log('OK');
//         } else {
//             throw { mailAddress: 'Email Adressを入力してください'}
//         }
//
//     })
// }
//
// export default asyncValidate