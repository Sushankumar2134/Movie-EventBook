import indianSuperImage from "../assets/indian super.jpg";
import arijitImage from "../assets/arijith singh.jpeg";
import sunburnImage from "../assets/suburn.jpg";
import comedyImage from "../assets/stand up comedy nights.jpeg";
import jagaranImage from "../assets/jagaran night.jpg";
import kabaddiImage from "../assets/pro kabaddi.webp";

const events = [
	{
		id: 1,
		title: "Indian Super League",
		category: "sports",
		rating: "Sports Event",
		image: indianSuperImage,
		gallery: [indianSuperImage, indianSuperImage, indianSuperImage],
		description:
			"India’s premier football league featuring top clubs and star players. Experience high-energy matches and intense rivalries. A must-watch spectacle for football fans."
	},
	{
		id: 2,
		title: "Arijit Singh Live",
		category: "music",
		rating: "Music Concert",
		image: arijitImage,
		gallery: [arijitImage, arijitImage, arijitImage],
		description:
			"An unforgettable live concert by India’s most loved playback singer. Sing along to romantic and soulful chartbusters. A magical musical evening for all ages."
	},
	{
		id: 3,
		title: "Sunburn Goa",
		category: "music",
		rating: "EDM Festival",
		image: sunburnImage,
		gallery: [sunburnImage, sunburnImage, sunburnImage],
		description:
			"Asia’s biggest EDM festival with world-renowned DJs. Dance to electrifying beats on Goa’s iconic beaches. A global music festival experience like no other."
	},
	{
		id: 4,
		title: "Standup Comedy Night",
		category: "comedy",
		rating: "Comedy Show",
		image: comedyImage,
		gallery: [comedyImage, comedyImage, comedyImage],
		description:
			"A laughter-filled evening featuring top standup comedians. Enjoy witty jokes and relatable humor. Perfect for a fun and stress-free night out."
	},
	{
		id: 5,
		title: "Jagaran Night",
		category: "plays",
		rating: "Cultural Event",
		image: jagaranImage,
		gallery: [jagaranImage, jagaranImage, jagaranImage],
		description:
			"Celebrate India’s cultural heritage through devotional music and dance. Experience soulful performances steeped in tradition. A spiritually enriching cultural evening."
	},
	{
		id: 6,
		title: "Pro Kabaddi League",
		category: "sports",
		rating: "Sports",
		image: kabaddiImage,
		gallery: [kabaddiImage, kabaddiImage, kabaddiImage],
		description:
			"India’s biggest kabaddi league featuring elite teams. Fast-paced action and thrilling raids await. A high-energy sports event for all fans."
	}
];

export default events;
