import {Planet} from "../interfaces/planet.interface";
import {Planets} from "../interfaces/planets.interface";

const planets: Planets = [
  {
    "id": "sun",
    "name": "The Sun",
    "picture": "https://cdn.pixabay.com/photo/2012/01/09/09/10/sun-11582_960_720.jpg",
    "age": 4603000000,
    "mass": "1.989 × 10^30 kg"
  },
  {
    "id": "mercury",
    "name": "Mercury",
    "picture": "https://cdn.pixabay.com/photo/2012/01/09/09/33/mercury-11591_960_720.png",
    "age": 4503000000,
    "mass": "3.285 × 10^23 kg"
  },
  {
    "id": "venus",
    "name": "Venus",
    "picture": "https://cdn.pixabay.com/photo/2011/12/13/14/39/venus-11022_960_720.jpg",
    "age": 4503000000,
    "mass": "4.867 × 10^24 kg"
  },
  {
    "id": "earth",
    "name": "Earth",
    "picture": "https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11008_960_720.jpg",
    "age": 4543000000,
    "mass": "5.972 × 10^24 kg"
  },
  {
    "id": "mars",
    "name": "Mars",
    "picture": "https://cdn.pixabay.com/photo/2011/12/13/14/30/mars-11012_960_720.jpg",
    "age": 4603000000,
    "mass": "6.39 × 10^23 kg"
  },
  {
    "id": "jupiter",
    "name": "Jupiter",
    "picture": "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-1-gsfc_20171208_archive_e000103.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=054fde0085e333b1cd1b4b7fe63b569d",
    "age": 4603000000,
    "mass": "1.898 × 10^27 kg"
  },
  {
    "id": "saturn",
    "name": "Saturn",
    "picture": "https://cdn.pixabay.com/photo/2012/11/28/10/54/saturn-67671_960_720.jpg",
    "age": 4503000000,
    "mass": "5.683 × 10^26 kg"
  },
  {
    "id": "uranus",
    "name": "Uranus",
    "picture": "https://cdn.pixabay.com/photo/2012/01/09/10/56/uranus-11625_960_720.jpg",
    "age": 4503000000,
    "mass": "8.681 × 10^25 kg"
  },
  {
    "id": "neptune",
    "name": "Neptune",
    "picture": "https://cdn.pixabay.com/photo/2012/11/28/09/17/neptune-67537_960_720.jpg",
    "age": 4503000000,
    "mass": "1.024 × 10^26 kg"
  }
];

export const findByPage = async (page: number, perPage: number): Promise<Planet[]> => {

  return planets;
}
