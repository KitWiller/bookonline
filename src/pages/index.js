import React from "react"
import Layout from "../components/layout"
import BookBox from "../components/bookbox"
export default function Home() {
	const props =  {
        "title": "linux all-in-one for dummies, 6th edition",
        "subtitle": "8 mini books chock full of linux!",
        "isbn13": "9781119490463",
        "price": "$23.82",
        "image": "https://itbook.store/img/books/9781119490463.png",
        "url": "https://itbook.store/books/9781119490463",
        "formats": [
            "ebook",
            "hardcover",
            "paperback"
        ],
        "prices": [
            {
                "store": "amazon",
                "price": "$23.82"
            },
            {
                "store": "betterworldbooks",
                "price": "$32.84"
            },
            {
                "store": "ebay",
                "price": "$31.85"
            },
            {
                "store": "ebooks.com",
                "price": "$43.67"
            }
        ],
        "rating": 5,
        "author": "emmett dulaney",
        "publisher": "wiley",
        "year": "2018",
        "pages": "560",
        "lang": "english",
        "format": [
            "paper book",
            "ebook (pdf)"
        ],
        "isbn10": "1119490464",
        "description": "inside, over 800 pages of linux topics are organized into eight task-oriented mini books that help you understand all aspects of the latest os distributions of the most popular open-source operating system in use today. topics include getting up and running with basics, desktops, networking, internet services, administration, security, scripting, linux certification, and more. \n\nthis new edition of linux all-in-one for dummies has a unique focus on ubuntu, while still including coverage of debian, red hat, suse, and others. the market is looking for administrators, and part of the qualifications needed for job openings is the authentication of skills by vendor-neutral third parties (comptia/linux professional institute) - and that's something other books out there don't address.\n\ninstall and configure peripherals, software packages, and keep everything current; connect to the internet, set up a local area network (including a primer on tcp/ip, and managing a local area network using configuration tools and files); browse the web securely and anonymously; get everything you need to pass your entry-level linux certification exams.",
        "categories": [
            ".net-framework",
            "administration",
            "asp",
            "basic",
            "for-dummies",
            "linux",
            "network",
            "security",
            "software",
            "ubuntu"
        ],
        "img": "../../img/9781119490463.png"
    }
	return (
		<Layout>
			<div className="text-red-500 bg-white">
				
				<BookBox image={props.img}     //invio dei dati dal bookbox costruito
				alt={"coverimage " + props.title} 
				price={props.price} 
				rating={props.rating}
				title={props.title}
				formats={props.formats}
				format={props.format}
				/>
				
			</div>

		</Layout>
	)
}


