// types.ts
export interface Service {
    name: string;
}

export interface ProjectDetail {
    title: string;
    description: string;
    language: string;
    timescale: string;
    system: string;
}

export interface BannerData {
    img: string;
    name: string;
}

export interface ImageData {
    src: string;
    alt: string;
}

export interface WorkDetail {
    title: string;
    description: string;
    context: string;
    goals: string;
    businessChallenges: string[];
    crm: string;
    socialMediaWork: string;
}

export interface Colors {
    primary: string;
    secondary: string;
    heading: string;
    ternary: string;
}

export interface PageData {
    services: Service[];
    projectDetail: ProjectDetail;
    bannerData: BannerData;
    images: ImageData[];
    workDetail: WorkDetail;
    colors: Colors; 
}



// // types.ts
// export interface Service {
//     name: string;
// }

// export interface ProjectDetail {
//     title: string;
//     description: string;
//     language: string;
//     timescale: string;
//     system: string;
// }

// export interface BannerData {
//     img: string;
//     name: string;
// }

// export interface ImageData {
//     src: string;
//     alt: string;
// }

// export interface WorkDetail {
//     title: string;
//     description: string;
//     context: string;
//     goals: string;
//     businessChallenges: string[];
//     crm: string;
//     socialMediaWork: string;
// }

// export interface Colors {
//     primary: string;
//     secondary: string;
//     heading: string;
//     ternary: string;
// }

// export interface PageData {
//     services: Service[];
//     projectDetail: ProjectDetail;
//     bannerData: BannerData;
//     images: ImageData[];
//     workDetail: WorkDetail;
//     colors: Colors;
// }




// // // types.ts
// // export interface Service {
// //     name: string;
// // }

// // export interface ProjectDetail {
// //     title: string;
// //     description: string;
// //     language: string;
// //     timescale: string;
// //     system: string;
// // }

// // export interface BannerData {
// //     img: string;
// //     name: string;
// // }

// // export interface ImageData {
// //     src: string;
// //     alt: string;
// // }

// // export interface WorkDetail {
// //     title: string;
// //     description: string;
// //     context: string;
// //     goals: string;
// //     businessChallenges: string[];
// //     crm: string;
// //     socialMediaWork: string;
// // }
