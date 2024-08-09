// dummyData.ts

import { PageData } from "@/types/work-detail";


export enum PageId {
    Pachmarhi = 'pachmarhi',
    Eurotech = 'eurotech',
    Hotelnatraj = 'hotelnatraj',
    VishnuDental = 'vishnu-dental',
    Gym = 'gym',
    // Add other page IDs as needed
}

export const getDummyData = (id: PageId): PageData => {
    const data = {
        [PageId.Pachmarhi]: {
            bannerData: {
                img: '/assets/portfolio-images/pachmani-banner.png',
                name: 'Pachmarhi Ayurveda',
            },
            services: [
                { name: 'UI/UX Design' },
                { name: 'Cloud Services' },
                { name: 'E-commerce' },
                { name: 'Digital Marketing' },
            ],
            images: [
                { src: '/assets/portfolio-images/computer-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/phone-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08a.png', alt: 'No Preview' },
            ],
            projectDetail: {
                title: 'Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                language: 'Next.js, Tailwind CSS, Node.js, Express.js, MongoDB',
                timescale: '12 Weeks',
                system: 'Magento',
            },
            workDetail: {
                title: 'Context',
                context: 'Reimagining the Realm of E-commerce with Easy In-App Purchases',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                goals: 'Seamless and Swift Product Delivery with Trusted App Development',
                businessChallenges: [
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Nunc sagittis amet fames amet',
                    'Scelerisque molestie eu amet laoreet non',
                    'Quam tincidunt. Nisl cursus',
                    'Risus mollis dictum dolor, quam Gravida',
                ],
                crm: 'Seamless and Swift Product Delivery with Trusted App Development',
                socialMediaWork: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience.',
            },
            colors: {
                primary: '#00AB55',
                secondary: '#737373',
                heading: '#282D46',
                ternary: '#010205',
            },
        },
        [PageId.VishnuDental]: {
            bannerData: {
                img: '/assets/portfolio-images/vishnu-banner.png',
                name: 'Vishnu dental',
            },
            services: [
                { name: 'UI/UX Design' },
                { name: 'Cloud Services' },
                { name: 'E-commerce' },
                { name: 'Digital Marketing' },
            ],
            images: [
                { src: '/assets/portfolio-images/computer-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/phone-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08a.png', alt: 'No Preview' },
            ],
            projectDetail: {
                title: 'Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                language: 'Next.js, Tailwind CSS, Node.js, Express.js, MongoDB',
                timescale: '10 Weeks',
                system: 'Magento',
            },
            workDetail: {
                title: 'Context',
                context: 'Reimagining the Realm of E-commerce with Easy In-App Purchases',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                goals: 'Seamless and Swift Product Delivery with Trusted App Development',
                businessChallenges: [
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Nunc sagittis amet fames amet',
                    'Scelerisque molestie eu amet laoreet non',
                    'Quam tincidunt. Nisl cursus',
                    'Risus mollis dictum dolor, quam Gravida',
                ],
                crm: 'Seamless and Swift Product Delivery with Trusted App Development',
                socialMediaWork: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience.',
            },
            colors: {
                primary: '#004AAD', // Change this to the red color you want for Page2
                secondary: '#737373',
                heading: '#FF0000',
                ternary: '#010205',
            },
        },
        [PageId.Gym]: {
            bannerData: {
                img: '/assets/portfolio-images/gym.png',
                name: 'Vishal Fitness Planet',
            },
            services: [
                { name: 'UI/UX Design' },
                { name: 'Cloud Services' },
                { name: 'E-commerce' },
                { name: 'Digital Marketing' },
            ],
            images: [
                { src: '/assets/portfolio-images/computer-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/phone-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08a.png', alt: 'No Preview' },
            ],
            projectDetail: {
                title: 'Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                language: 'Next.js, Tailwind CSS, Node.js, Express.js, MongoDB',
                timescale: '10 Weeks',
                system: 'Magento',
            },
            workDetail: {
                title: 'Context',
                context: 'Reimagining the Realm of E-commerce with Easy In-App Purchases',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                goals: 'Seamless and Swift Product Delivery with Trusted App Development',
                businessChallenges: [
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Nunc sagittis amet fames amet',
                    'Scelerisque molestie eu amet laoreet non',
                    'Quam tincidunt. Nisl cursus',
                    'Risus mollis dictum dolor, quam Gravida',
                ],
                crm: 'Seamless and Swift Product Delivery with Trusted App Development',
                socialMediaWork: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience.',
            },
            colors: {
                primary: '#F08525', // Change this to the red color you want for Page2
                secondary: '#737373',
                heading: '#FF0000',
                ternary: '#010205',
            },
        },
        [PageId.Eurotech]: {
            bannerData: {
                img: '/assets/portfolio-images/eurotech-banner.webp',
                name: 'Eurotech Exchange',
            },
            services: [
                { name: 'UI/UX Design' },
                { name: 'Cloud Services' },
                { name: 'E-commerce' },
                { name: 'Digital Marketing' },
            ],
            images: [
                { src: '/assets/portfolio-images/computer-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/phone-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08a.png', alt: 'No Preview' },
            ],
            projectDetail: {
                title: 'Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                language: 'Next.js, Tailwind CSS, Node.js, Express.js, MongoDB',
                timescale: '10 Weeks',
                system: 'Magento',
            },
            workDetail: {
                title: 'Context',
                context: 'Reimagining the Realm of E-commerce with Easy In-App Purchases',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                goals: 'Seamless and Swift Product Delivery with Trusted App Development',
                businessChallenges: [
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Nunc sagittis amet fames amet',
                    'Scelerisque molestie eu amet laoreet non',
                    'Quam tincidunt. Nisl cursus',
                    'Risus mollis dictum dolor, quam Gravida',
                ],
                crm: 'Seamless and Swift Product Delivery with Trusted App Development',
                socialMediaWork: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience.',
            },
            colors: {
                primary: '#da4540', // Change this to the red color you want for Page2
                secondary: '#737373',
                heading: '#FF0000',
                ternary: '#010205',
            },
        },
        [PageId.Hotelnatraj]: {
            bannerData: {
                img: '/assets/portfolio-images/vishnu-banner.png',
                name: 'Vishnu dental',
            },
            services: [
                { name: 'UI/UX Design' },
                { name: 'Cloud Services' },
                { name: 'E-commerce' },
                { name: 'Digital Marketing' },
            ],
            images: [
                { src: '/assets/portfolio-images/computer-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/phone-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08a.png', alt: 'No Preview' },
            ],
            projectDetail: {
                title: 'Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                language: 'Next.js, Tailwind CSS, Node.js, Express.js, MongoDB',
                timescale: '10 Weeks',
                system: 'Magento',
            },
            workDetail: {
                title: 'Context',
                context: 'Reimagining the Realm of E-commerce with Easy In-App Purchases',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                goals: 'Seamless and Swift Product Delivery with Trusted App Development',
                businessChallenges: [
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Nunc sagittis amet fames amet',
                    'Scelerisque molestie eu amet laoreet non',
                    'Quam tincidunt. Nisl cursus',
                    'Risus mollis dictum dolor, quam Gravida',
                ],
                crm: 'Seamless and Swift Product Delivery with Trusted App Development',
                socialMediaWork: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience.',
            },
            colors: {
                primary: '#FF0000', // Change this to the red color you want for Page2
                secondary: '#737373',
                heading: '#FF0000',
                ternary: '#010205',
            },
        },
    };

    return data[id] || data[PageId.Pachmarhi]; // Default to Page1 if the ID doesn't match
};




// // dummyData.ts

// import { Service, ProjectDetail, BannerData, ImageData, WorkDetail  } from "@/types/work-detail";

// export const services: Service[] = [
//     { name: 'Ui/Ux Design' },
//     { name: 'Cloud Services' },
//     { name: 'E-commerce' },
//     { name: 'Digital Marketing' }
// ];

// export const projectDetail: ProjectDetail = {
//     title: 'Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch',
//     description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
//     language: 'Next js, tailwind css, node js, express js, mongodb',
//     timescale: '12 Week',
//     system: 'Magento'
// };

// export const bannerData: BannerData = {
//     img: '/assets/portfolio-images/pachmani-banner.png',
//     name: 'Pachmarhi Ayurveda'
// };

// export const images: ImageData[] = [
//     { src: '/assets/portfolio-images/computer-mockup.png', alt: 'No Preview' },
//     { src: '/assets/portfolio-images/08.png', alt: 'No Preview' },
//     { src: '/assets/portfolio-images/phone-mockup.png', alt: 'No Preview' },
//     { src: '/assets/portfolio-images/08a.png', alt: 'No Preview' }
// ];

// export const workDetail: WorkDetail = {
//     title: 'Seamless and Swift Product Delivery with Trusted App Development',
//     description: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience.',
//     context: 'Reimagining the Realm of E-commerce with Easy In-App Purchases',
//     goals: 'Seamless and Swift Product Delivery with Trusted App Development',
//     businessChallenges: [
//         'Lorem ipsum dolor sit amet, consectetur',
//         'Nunc sagittis amet fames amet',
//         'Scelerisque molestie eu amet laoreet non',
//         'quam tincidunt. Nisl cursus',
//         'Risus mollis dictum dolor, quam Gravida'
//     ],
//     crm: 'Seamless and Swift Product Delivery with Trusted App Development',
//     socialMediaWork: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience.'
// };
