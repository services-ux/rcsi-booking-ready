const rawPath = "./raw/";

const candidates = [
  {
    name: "Jyothi Joseph",
    email: "josephjyoti1@gmail.com",
    number: "APP-09180825-00002",
    phone: "+966 50 471 3097",
    expiry: "29 Sep 2026",
    dob: "19 May 1994",
    address: "Kottarathil, Peratta, Koottupuzha P.O., Kannur, PIN 670706, Kerala, India",
    photo: "IMG_2178.JPG",
    passport: "PASSPORT (1).pdf",
    decision: "APP-09180825-00002 Compensation Measure Letter.pdf",
  },
  {
    name: "Sreya Vallattu Satheesan",
    email: "sreyavscare@gmail.com",
    number: "APP-06130126-90572",
    phone: "+91 91139 39631",
    expiry: "28 Jan 2027",
    dob: "16 June 1998",
    address: "Vallattu, Agali, Karara P.O., Palakkad, PIN 678581, Kerala, India",
    photo: "Sreya2122.jpg",
    passport: "PASSPORT.pdf",
    decision: "Decision letter 2026 JAN Sreya .pdf",
  },
  {
    name: "Abin Thomas",
    email: "abinthomas543550@gmail.com",
    number: "APP-09290426-120385",
    phone: "+91 87002 88506",
    expiry: "5 Jun 2027",
    dob: "20 November 1999",
    address: "Kuzhiyamplavil, Vattiyamthode P.O., Puravayal, Vayathur, Kannur, PIN 670705, Kerala, India",
    photo: "IMG_4872-removebg-preview.jpg",
    passport: "Passport .pdf",
    decision: "APP-09290426-120385 Compensation Measure Letter.pdf",
  },
  {
    name: "Sravanthi Pudota",
    email: "sravanthipudota789@gmail.com",
    number: "APP-08150925-02291",
    phone: "+91 91770 58550",
    expiry: "24 Nov 2026",
    dob: "5 July 1989",
    address: "1-40/2, Mariyapuram, Ookal Haveli, Geesugonda, Warangal, PIN 506330, Telangana, India",
    photo: "IMG-20260819-WA0000 (1).jpg",
    passport: "pass port.pdf",
    decision: "DOC-20260602-WA0220.pdf",
  },
  {
    name: "Dona Immanuel",
    email: "immaniesdona@gmail.com",
    number: "APP-07250326-118071",
    phone: "+91 94465 95161",
    expiry: "14 Apr 2027",
    dob: "22 September 2000",
    address: "Edavazhickil, Anjadikaranazhy P.O., Cherthala, Alappuzha, PIN 688531, Kerala, India",
    photo: "DONA (1).JPG",
    passport: "1.Dona -passport.pdf",
    decision: "DL (1).pdf",
  },
  {
    name: "Daina Mathew",
    email: "mathewdaina95@gmail.com",
    number: "APP-07230326-117923",
    phone: "+91 82899 56065",
    expiry: "14 Apr 2027",
    dob: "15 May 1995",
    address:
      "Chirackal House, Kaliyar P.O., Kaliyar, Vannappuram, Idukki, PIN 685607, Kerala, India. Currently residing in Saudi Arabia for work; full Saudi residential address not supplied.",
    status: "Gmail document set available",
    photo: "Daina_Mathew_Photo.jpg",
    passport: "Daina_Mathew_Passport.pdf",
    decision: "Daina_Mathew_NMBI_Decision_Letter.pdf",
  },
  {
    name: "Syama Kalayathu Sasidharan",
    email: "syamakalayathusasidharan@gmail.com",
    number: "APP-06301225-68379",
    phone: "+91 82810 79714",
    expiry: "15 Jan 2027",
    dob: "4 July 1991",
    address: "Oledathu House, Ellumpuram P.O., Muttom, Idukki, PIN 685587, Kerala, India",
    photo: "syama.jpg",
    passport: "Passport.pdf",
    decision: "DL.pdf",
  },
  {
    name: "Sari Surendran",
    email: "sarisurendran1994@gmail.com",
    number: "APP-10080226-113849",
    phone: "+971 52 432 5965",
    expiry: "28 May 2027",
    dob: "5 February 1987",
    address: "Sankaralayam Aickadu, Kodumon P.O., Adoor, Pathanamthitta, PIN 691555, Kerala, India",
    photo: "Photo.jpeg",
    passport: "passport_Sari Surendran.pdf",
    decision: "APP-10080226-113849 Compensation Measure Letter.pdf",
  },
  {
    name: "Anju Tomy",
    email: "anjutomy38@gmail.com",
    number: "APP-12040825-00008",
    phone: "+91 83019 79029",
    expiry: "16 Jan 2027",
    dob: "15 October 2000",
    address: "Nalankal House, Kaipuzha P.O., Kottayam, PIN 686602, Kerala, India",
    photo: "ANJU PHOTO1.jpg",
    passport: "ANJU PASSPORT.pdf",
    decision: "ANJU TOMY DECISION LETTER.pdf",
  },
  {
    name: "Anju Bharathan",
    email: "anjubharathan7@gmail.com",
    number: "APP-05250326-118059",
    phone: "+91 79025 43811",
    expiry: "20 Apr 2027",
    dob: "28 September 1993",
    address: "Nirannanilathu, Edappariyaram P.O., Elanthoor, Pathanamthitta, PIN 689643, Kerala, India",
    photo: "ANJUPHOTO.jpg",
    passport: "anjuneeeeeee.pdf",
    decision: "anju deci.pdf",
  },
  {
    name: "Elijah Paul Jayaseelan Thomas",
    email: "elijahpauljjt@gmail.com",
    number: "APP-04120326-117217",
    phone: "+91 91592 94044",
    expiry: "28 Apr 2027",
    dob: "23 August 1994",
    address: "Not passport-verifiable from ZIP. CV address: #78 - N Block, Bharathi Nagar, Kovaipudur, Coimbatore, Tamil Nadu - 641042",
    photo: "IMG-20260819-WA0000.jpg",
    passport: "IMG_20260819_125359.jpg",
    decision: "Elijah Paul DL APP-04120326-117217.pdf",
  },
  {
    name: "Prabhavathi Thiyagarajan",
    email: "prabhavathithiyagarajan@gmail.com",
    number: "APP-07200526-121916",
    phone: "+91 97911 48935",
    expiry: "5 Jun 2027",
    dob: "4 April 1986",
    address: "G4, Yamuna Flats, Thangavelu Street Extension, Puzhuthivakkam, Chennai 600091",
    photo: "Prabhavathi passport photo.jpg",
    passport: "Prabhavathi Thiyagarajan passport bio page.pdf",
    decision: "Prabhavathi- DecisionLetter.pdf",
  },
  {
    name: "Mini George Nedumthakidi",
    email: "georgemini31@yahoo.com",
    number: "APP-11260326-118154",
    phone: "+971 56 790 6195",
    expiry: "18 May 2027",
    dob: "30 March 1979",
    address:
      "P O BOX 34555. Current Residential Address: Zone District code - W24_02- C25, Al Mushrif, Building NO 79, Flat no 205, Abudhabi, UAE",
    status: "Document set available",
    photo: "Mini_George_Nedumthakidi_Photo.png",
    passport: "Mini_George_Nedumthakidi_Passport.pdf",
    decision: "Mini_George_Nedumthakidi_Decision_Letter.pdf",
  },
];

const els = {
  submissionCount: document.querySelector("#submissionCount"),
  list: document.querySelector("#candidateList"),
  search: document.querySelector("#candidateSearch"),
  photo: document.querySelector("#detailPhoto"),
  status: document.querySelector("#detailStatus"),
  name: document.querySelector("#detailName"),
  email: document.querySelector("#detailEmail"),
  address: document.querySelector("#detailAddress"),
  number: document.querySelector("#detailNumber"),
  phone: document.querySelector("#detailPhone"),
  expiry: document.querySelector("#detailExpiry"),
  dob: document.querySelector("#detailDob"),
  decisionLink: document.querySelector("#decisionLink"),
  photoLink: document.querySelector("#photoLink"),
  passportLink: document.querySelector("#passportLink"),
};

let selectedIndex = 0;

function fileUrl(filename) {
  return rawPath + filename.split("/").map(encodeURIComponent).join("/");
}

function setDownload(link, filename, downloadName) {
  link.classList.remove("is-disabled");
  link.removeAttribute("aria-disabled");
  link.href = fileUrl(filename);
  link.download = downloadName;
}

function disableDownload(link) {
  link.classList.add("is-disabled");
  link.setAttribute("aria-disabled", "true");
  link.removeAttribute("download");
  link.href = "#";
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function renderList() {
  const query = els.search.value.trim().toLowerCase();
  const matches = candidates
    .map((candidate, index) => ({ candidate, index }))
    .filter(({ candidate }) => {
      return [candidate.name, candidate.email, candidate.number, candidate.address]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });

  els.list.innerHTML = "";

  if (matches.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No candidates match this search.";
    els.list.append(empty);
    return;
  }

  matches.forEach(({ candidate, index }) => {
    const button = document.createElement("button");
    button.className = `candidate-card${index === selectedIndex ? " is-active" : ""}`;
    button.type = "button";
    button.addEventListener("click", () => selectCandidate(index));

    const img = candidate.hasFiles === false ? document.createElement("span") : document.createElement("img");
    if (candidate.hasFiles === false) {
      img.className = "avatar-fallback";
      img.textContent = initials(candidate.name);
    } else {
      img.src = fileUrl(candidate.photo);
      img.alt = "";
    }

    const text = document.createElement("span");
    const name = document.createElement("strong");
    name.textContent = candidate.name;
    const number = document.createElement("span");
    number.textContent = candidate.number;
    text.append(name, number);

    button.append(img, text);
    els.list.append(button);
  });
}

function selectCandidate(index) {
  selectedIndex = index;
  const candidate = candidates[index];

  els.status.textContent = candidate.status || "Selected candidate";
  els.photo.classList.toggle("is-placeholder", candidate.hasFiles === false);
  if (candidate.hasFiles === false) {
    els.photo.style.backgroundImage = "";
    els.photo.textContent = initials(candidate.name);
    els.photo.setAttribute("aria-label", `${candidate.name} photo not uploaded yet`);
  } else {
    els.photo.style.backgroundImage = `url("${fileUrl(candidate.photo)}")`;
    els.photo.textContent = "";
    els.photo.setAttribute("aria-label", `${candidate.name} photo`);
  }
  els.name.textContent = candidate.name;
  els.email.textContent = candidate.email || "Awaiting candidate upload";
  els.address.textContent = candidate.address;
  els.number.textContent = candidate.number;
  els.phone.textContent = candidate.phone;
  els.expiry.textContent = candidate.expiry;
  els.dob.textContent = candidate.dob;

  if (candidate.hasFiles === false) {
    disableDownload(els.decisionLink);
    disableDownload(els.photoLink);
    disableDownload(els.passportLink);
  } else {
    const baseName = candidate.name.replaceAll(" ", "_");
    setDownload(els.decisionLink, candidate.decision, `${baseName}_Decision_Letter`);
    setDownload(els.photoLink, candidate.photo, `${baseName}_Photo`);
    setDownload(els.passportLink, candidate.passport, `${baseName}_Passport_Bio_Page`);
  }

  renderList();
}

els.submissionCount.textContent = `${candidates.length} candidates`;
els.search.addEventListener("input", renderList);
selectCandidate(0);
