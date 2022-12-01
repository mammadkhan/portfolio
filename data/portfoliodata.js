//Import portfolio website screenshots
import azjobit from "../public/websites/azjobit.png";
import bankapp from "../public/websites/bankapp.png";
import ecommerce from "../public/websites/ecommerce.png";
import iplocation from "../public/websites/iplocation.png";
import randomnumfacts from "../public/websites/randomnumfacts.png";
import sketchapp from "../public/websites/sketchapp.png";
import snipperapp from "../public/websites/snipperapp.png";
import weatherapp from "../public/websites/weatherapp.png";

//Import used tool icons
import react from "../public/tools/react.png";
import nextjs from "../public/tools/nextjs.png";
import angular from "../public/tools/angular.png";
import api from "../public/tools/api.png";

export const portfoliodata = [
	{
		title: "Azjobit",
		domainPreview: "azjobit.netlify.app",
		domain: "https://azjobit.netlify.app",
		imgUrl: azjobit,
		tools: [react],
	},
	{
		title: "Bank App",
		domainPreview: "mbbankapp.netlify.app",
		domain: "https://mbbankapp.netlify.app",
		imgUrl: bankapp,
		tools: [react, nextjs],
	},
	{
		title: "Ecommerce App",
		domainPreview: "mbcommerce.netlify.app",
		domain: "https://mbcommerce.netlify.app",
		imgUrl: ecommerce,
		tools: [react],
	},
	{
		title: "Iplocation",
		domainPreview: "mbiplocation.netlify.app",
		domain: "https://mbiplocation.netlify.app",
		imgUrl: iplocation,
		tools: [angular, api],
	},
	{
		title: "Random Number Facts",
		domainPreview: "mbrandomnumfacts.surge.sh",
		domain: "http://mbrandomnumfacts.surge.sh",
		imgUrl: randomnumfacts,
		tools: [react, api],
	},
	{
		title: "Sketchapp Clone",
		domainPreview: "mbsketchapp.netlify.app",
		domain: "https://mbsketchapp.netlify.app",
		imgUrl: sketchapp,
		tools: [react],
	},
	{
		title: "Snipperapp challenge",
		domainPreview: "mbsnipperchallenge.netlify.app",
		domain: "https://mbsnipperchallenge.netlify.app",
		imgUrl: snipperapp,
		tools: [react],
	},
	{
		title: "Weather App",
		domainPreview: "bmweatherapp.netlify.app",
		domain: "https://bmweatherapp.netlify.app",
		imgUrl: weatherapp,
		tools: [react, api],
	},
];
