const heroImage = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/hero-image.svg"

const brandAlArab = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-1.jpg"
const brandMax = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-2.jpg"
const brandDang = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-3.jpg"
const brandCrelio = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-4.jpg"
const brandIqvia = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-5.jpg"
const brandItdose = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-6.jpg"
const brandPracto = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/logo-7.jpg"


const marketCardItem1 = "https://dn96iqv3kf32j.cloudfront.net/about/static/imgs/market-card-item-1.png"
const marketBackground = "https://dn96iqv3kf32j.cloudfront.net/about/static/imgs/market-background.svg"




const servicesPdfWhatsapp = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-pdf-whatsapp.png"
const servicesMarketing = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-marketing.png"
const servicesAffordable = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-affordable.png"
const servicesBackground = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-background.png"
const servicesTemplates = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-templates.png"
const servicesCorporateOfferings = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-corporate-offerings.png"
const servicesInstant = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/services-instant.png"

const reportVitamin = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-vitamin.png"
const reportKidney = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-kidney.png"
const reportLipid = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-electrolyte.png"
const reportDiabetes = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-diabetes.png"

const reportPdfVitamin = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-pdf-vitamin.png"
const reportPdfKidney = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-pdf-kidney.png"
const reportPdfLiver = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-pdf-diabetes.png"
const reportPdfCovid = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/report-pdf-lipid.png"

const achievementsBackground = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/achievements-background.svg"

const clientMessage0 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-0.png"
const clientMessage1 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-1.png"
const clientMessage2 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-2.png"
const clientMessage3 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-3.png"
const clientMessage4 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-4.png"
const clientMessage5 = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-5.png"
const clientMessageBackground = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/client-message-background.png"


const featuresBig = "https://dn96iqv3kf32j.cloudfront.net/home/static/imgs/features-background.svg"

const getInTouch1 = "https://dn96iqv3kf32j.cloudfront.net/getintouch/static/imgs/get-in-touch-1.svg"
const getInTouch2 = "https://dn96iqv3kf32j.cloudfront.net/getintouch/static/imgs/get-in-touch-2.svg"


const solutions = {
    self: { url: "/solutions/", text: "Solutions", onNavbar: true },
    subLinks: [
        { url: "/solutions/labs", text: "Labs" },
        { url: "/solutions/doctors", text: "Doctors" },
        { url: "/solutions/corporates", text: "Corporates" },
    ],
    HeroSection: {
        contentLeft: {
            heading: { line1: "Introduction", line2: "" },
            descriptions: [
                "Looking at modern technology - based solutions to automate lab processes ?\rPatients cribbing about the quality of their medical lab test reports ?\nMedical marketing campaigns getting stagnant with generic content?",
                "These problems require innovative solutions.Look no further as we have the friend every new-age diagnostics provider needs: the SMART REPORT.",
                "The ultimate lab reporting software that helps you take a leap forward from an outdated format to a more patient- centric and dynamic style."
            ]
        },
        contentRight: {
            image: {
                imagePath: heroImage,
                altText: "hero"
            }
        },
        linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },
    Services: {
        header: {
            heading: [
                { text: "Simple Information with World Class-Design" },
                { text: "Engage Patients", style: { color: "#3567D6", fontWeight: "700" } }
            ],
            description:
                "We’ve put 3 years to guarantee you the best user-experience in lab reporting.",
        },
        cardsList: [
            {
                image: { imagePath: servicesCorporateOfferings, altText: "CorporateOfferings" },
                heading: "Simple Content with world-class Design",
                content: "We give to the point, clear and reliable information to the patients. Our visuals are self explanatory which takes customer’s experience to a new level.",
            },
            {
                image: { imagePath: servicesTemplates, altText: "reports" },
                heading: "Print and Digital(Whatsapp, SMS, E-mail, Print, App) ",
                content: "Our patient friendly lab reports are accessible to the patients the way they want. Smart reports are more convenient and give personalized experience to patients, doctors as well as diagnostic labs.",
            },
            {
                image: { imagePath: servicesInstant, altText: "instant" },
                heading: "Advanced Analytics",
                content: "Our software converts random medical data into a piece of meaningful and useful information. ",
            },
            {
                image: { imagePath: servicesPdfWhatsapp, altText: "PdfWhatsapp" },
                heading: "Instant and Automated Available",
                content: "let your e-lab report shine with your own unique brand colors, logos and formatting style. It is metaphorically like your lab test reports presenting niroggyan’s curated content in your brand’s own voice.",
            },
            {
                image: { imagePath: servicesAffordable, altText: "Affordable" },
                heading: "Unique White Label Lab Branding",
                content: "We are committed to provide value for money to our clients around the world. We know how to make pocket friendly modern lab reports.",
            },
            {
                image: { imagePath: servicesCorporateOfferings, altText: "CorporateOfferings" },
                heading: "Super Affordable",
                content: "We are committed to provide value for money to our clients around the world. We know how to make pocket friendly modern lab reports.",
            },
        ],
        backgroundImage: servicesBackground

    },
    OurReports: {
        contentLeft: {
            content: {
                heading: "Our Reports",
                description: [
                    { text: "🏥 Never give prescriptions to patients but bring awareness to them so that they know when to consult a doctor." },
                    { text: "🏥 supports preventive health and empowers patients to take charge of their health." },
                    { text: "🏥 Provide accurate medical facts relevant to the patient's health status. We never give incomplete and confusing information to patients." },
                    { text: "🏥 Highlighting Data Analytics " },
                    { text: "🏥 Clients logo" },
                ]
            }
        },
        contentRight: {
            image: {
                imagePath: heroImage,
                altText: "hero"
            }
        },
        linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },

    SmartReportTypes: {
        contentLeft: {
            content: {

                heading: "Different types of Smart Reports",

                description: [
                    { url: "https://drive.google.com/file/d/1ECRdR74lhZZkFGmgEScEX_kkndA1Pfe0/view", text: "🏥 Advanced Smart Report" },
                    { url: "https://drive.google.com/file/d/1GqwSoSYf-Lr5ul1F3dOdBvErfL--yOxa/view", text: "🏥 Compact Smart Report" },
                    { url: "https://drive.google.com/file/d/1rpQ70lC5xKwND7j2VDK1s5J2Rvh2OKB7/view", text: "🏥 Dynamic Smart Report" },
                    { url: "https://drive.google.com/file/d/1r59UUrtsCO_DzJelT-1Cx6HzGWfrmbft/view", text: "🏥 Smart Summary Report" },
                    { url: "https://drive.google.com/file/d/1DsOoghabqchcCDrrt8AstwcRMdKVrtrx/view", text: "🏥 Covid Smart Report" }
                ]
            }
        },
        contentRight: {
            image: { imagePath: heroImage, altText: "believeBackground" },
        }
    },
    SmartReportsDifferentLanguages: {
        contentLeft: {
            content: {
                heading: "Smart Report in different languages",
                description: [
                    { url: "https://drive.google.com/file/d/1ECRdR74lhZZkFGmgEScEX_kkndA1Pfe0/view", text: "🏥 English Smart Reports" },
                    { url: "https://drive.google.com/file/d/1fl1yrJV5IZPR5jzNgsPzSmSmoVyTFjmA/view", text: "🏥 Hindi Smart Reports" },
                    { url: "https://drive.google.com/file/d/1LXi3tLI9u-gDIcUV14_h6lfucHwvdCpJ/view", text: "🏥 Arabic Smart Reports" },
                ]
            }
        },
        contentRight: {
            image: {
                imagePath: heroImage,
                altText: "hero"
            }
        },
        linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },


    WhyChooseUs: {
        contentLeft: {

            content: {
                heading: "Advantages over other competitor reports (why choose us)",
                description: [
                    { text: "🏥 We listen to our clients and are always open to their suggestions. Our flexibility and ability to adapt with the individual client’s needs, is what makes us stand apart. We will customize your laboratory report format, the exact way you want." },
                    { text: "🏥 Content goes through 3 stages of editing and reviewing before becoming part of our knowledge bank. Our verified medical knowledge bank is again reviewed and updated at regular intervals by our in-house team of researchers and doctors. You are most welcome to ask for a source/reference/citation of any part of our content." },
                    { text: "🏥 Our Software As A Service (SAAS) is of the highest standards." },
                    { text: "🏥 Our pathology reporting software is secure and updated.  Our strict, client friendly policies ensure protection of patient’s data." },
                    { text: "🏥 We provide 1 month complementary marketing support to our clients. In this we also provide sales related analytical insights to our clients." },
                ]
            }
        },
        contentRight: {
            image: {

                imagePath: heroImage,
                altText: "hero"
            }
        },
        linearGradient: "linear-gradient(to right, #455BCD, #52BBE8)"
    },
    GetInTouch: {

        block1: {
            imagePath: getInTouch1,

        },
        block2: {
            line1: "Get In Touch",
            line2: "contact@niroggyan.com",
            line3: "+91-7678277891",
        },
        block3: {
            imagePath: getInTouch2,
        }
    },

};
export default solutions;