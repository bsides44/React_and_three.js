exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('texts').del()
    .then(function () {
      // Inserts seed entries
      return knex('texts').insert([
	{
	  name: "about this page",
	  url: "about-page",
	  short_title: JSON.stringify(

	    {tereo: "HE AHA TĒNEI?",
	     english: "WHAT IS THIS?"

	    }
	  ),
	    title: JSON.stringify(
	      { tereo: "He aha tēnei?",
		english: "What is this?"
	      }
	    ),
	    paragraphs: JSON.stringify([
	      {tereo: "Ko te whāinga o te rauemi nei AR ki te whakatū i te atua nei a Tāwhirimatea ki runga o Tangi-te-keo, Whanganui-ā-Tara, te taumata karawhiuwhiuhia e te hau. Kia āhei te tangata te aro whakarunga atu, kia kite i nga nekehanga o Tāwhirimātea e tū mai ana i runga o Tangi-te-keo, e hāngai ana ki te huarere.",
	       english: "Our project is to place a representation of Tāwhirimātea on top of Tangi-te-keo (Mount Victoria), Wellington, the windiest place in our world. Tāwhirimātea’s behaviours will respond to the wind, so that people can look up to the atua on Mount Vic to see what the weather is doing. In our work towards this goal, we are pushing new AR technologies to the limit of what they are currently capable of, so it is a continual work in progress, driven by a powerful vision."
				},
				{english:"Our intentions are to create a tool to educate and inspire people about the deeper aspects of living in Aotearoa, the realms that exist just below the surface or behind the veil of everyday life. Augmented Reality (or AR) is a powerful, almost magical tool for revealing unseen elements. We saw in AR a way to connect the past with the future, to connect the physical world with the spiritual world, and for connecting different facets of Aotearoa. ATUA_AR sees digital technology as a powerful platform for learning about and creating engagement with te ao Māori.",
				tereo:"Ko te whakakitenga kia tipu te mātauranaga o te tangata, kia whakaawe hoki i te tangata kia mārama ai ki te hōhonutanga o ngā āhuatanga katoa o te noho i Aotearoa nei. Ko te kaupapa nei a Augmented Reality he hononga ki te ao wairua, he hono i te ao ōnanahi ki te ao o ēnei rā, he hononga hoki ki ngā tūmomo āhuatanga katoa i Aotearoa nei."},
				{english:"Our larger vision is to develop tools to help educate people about the rich history, legends and stories of the land through accessible and inspired augmented reality. Currently this idea is in the prototype stage, so we are seeing what we can technically achieve as a learning project, in order to engage in larger discussion and consultation before taking it further.",
				tereo:"Hēoi anō, ko te tino whakakitengatanga whānui o te rauemi nei, kia whai wāhi ai te hītori, ngā pūrakau, me ngā kōrero tuku iho o te whenua nei a Aotearoa ki te katoa. I tēnei wā, kei te tipu tonu te kaupapa nei, koia tenei ko tana timatanga noa iho. Kei te waihangatia tonu kia kitea te nui o tōna whānuitanga."},
				{tereo:"Īmera mai ki: ben@ioa.co.nz",
			 	english:"Email to: ben@ioa.co.nz"
				}
	    ]),
	    author: "Laura",
	    translator: "Alex"
	},
	{name: "legend",
	 url: "legend",
	 short_title:JSON.stringify(

	   {tereo:"TĒTAHI PŪRĀKAU",
	    english:"THE LEGEND"}),

	 title:JSON.stringify(
	   {tereo:"Tētahi pūrākau e pā ana ki Tāwhirimātea",
	     english:"The Legend of Tāwhirimātea"
	   }),
	  paragraphs:JSON.stringify([
	    {
	      tereo:"Noho ai a Tāwhirimātea i roto i te tauawhitanga o ana pakeke a Ranginui rāua ko Papatūānuku, ā, kua roa kē te whānau e noho pērā ana. He rawe ki a ia te noho piri ki ana pakeke. Ka taea tana kōrero ki tana whaea, me te tohutohu i tana matua i ngā wā e pīrangihia ana. Kāre he aha ki a Tāwhirimātea, ngā uauatanga o te noho pō i ngā wā katoa me te kōpātanga hoki, kua mate kē a ia me ōna tuākana ki te ngōki haere. Kua eke kē ngā wera o ana tuākana.",
	      english:"Tāwhirimātea lived between the embrace of Ranginui and Papatūānuku as did the other children of his whānau. He liked living close to his parents. He could talk to his mother, and get advice from his father when he needed to. Tāwhirimātea didn't mind the difficulties of living in continual darkness, or that space was so confined that he and the rest of his siblings had to crawl to get around. But the other children had had enough."
	    },
	    {
	      tereo:"Ka karangahia he hui, ka whakataungia e te nuinga o ngā tamariki, kia wehea ō rātau pakeke.",
	      english:"A meeting was called and the majority of the children decided that their parents had to be separated."
	    },
	    {
	      tereo:"Ka kī a Tūmatauenga, 'Ki te rongo rāua i te rau o taku patu, kātahi rā ka maunu mai rāua, kua pai tō tātau hikoi i raro i te maru o Tamanuiterā.'",
	      english:" Tūmātauenga addressed them, 'Once they feel the blows of my patu they will soon loosen their grip and we'll finally be free to walk upright and greet Tamanuiterā, the sun.'"
	    },
	    {
	      tereo:"Ka whakahē tonu a Tāwhirimātea, me tana tīwaha atu i tōna āpitihanga, kia rongohia e te katoa, 'Ko wai koutou! Ko wai koutou ki te whakamamae i ō tātau pakeke? Nā rāua tātau i whāngai, i poipoi, i whakatipu hoki, ka huri atu koutou ka pēnei atu ki a rāua?' Whakatakariri ana a ia.",
	      english:"Tāwhirimātea disagreed.'How dare you! How dare you think of hurting our parents in such a way. They fed you, nurtured and raised you, and now you reward them with this?'"
	    },
	    {
	      tereo:"Kātahi ka tuohu ngā māhunga o ngā tamariki i runga i te whakamā, heoi anō, ka totohe tonu a Tūmatauenga.",
	      english:"The children bowed their heads in shame, but Tūmatauenga stood his ground."
	    },
	    {
	      tereo:"'Kua whiua kēhia te pātai ki a rāua kia wehe, kua patipati atu tātau ki a rāua, kia pai ai te kite i te ao mārama, me te kore anō e aro mai? E kāo! Kotahi noa iho te huarahi hei whail!'",
	      english:"'We have asked them to separate, we have pleaded with them to let us see the light, but do they listen? No, this is the only way!'"
	    },
	    {
	      tereo:"Ka ara ake tana patu ki te hahau i ana pakeke, tere tonu a Tāwhirimātea ki te kuru i a ia, ā, e nōnoke ana rāua i roto i te pōuritanga, mea rawa ake ka umere atu a Tāne Mahuta ki a rāua kia turituri, kia āta tau.",
	      english:"Tūmātauenga raised his patu to strike at his parents but Tāwhirimātea was on him in a flash. Grappling in the dark they struggled, until finally Tāne Mahuta pleaded for quiet."
	    },
	    {
	      tereo:"'Kāti! Ehara tēnā i te whakautu, kua whakaae katoa tātau, kāre tātau e taea te noho pēnei. Māku e whakamātau ki te wehe i a rāua mā te pēhitanga o aku ringa.'",
	      english:"'Stop! Fighting will not resolve our problem, we have agreed that we cannot continue to live this way. I'm sorry Tāwhiri but separating our parents has been agreed upon by the majority of us. With the gentle push of my arms, and without hurting them, I will push our parents apart.'"
	    },
	    {
	      tereo:"Ka whakaae atu rātau, heoi ka noho tonu a Tāwhirimātea ki te taha whakahē, kāre ia i tautoko i runga i tāna i tūpono ai. I te tuatahi ka pēhia e Tāne Mahuta ana waewae ki runga i a Papatūānuku, ka pana i a Ranginui mā ōna ringaringa. Ka whakapaungia ana kaha katoa ki tēnei mahi, e kore hoki e taea te wehe i ana pakeke",
	      english:"The others agreed, but Tāwhirimātea refused to support what he didn't believe was right. Firstly Tāne Mahuta braced his legs on Papatūānuku and pushed Ranginui with his arms. He used all his strength, but without success."
	    },
	    {
	      tereo:"'Kāore e taea e koe,' te kī a Tāwhirimātea. 'Whakamutua, e tika ana, kia noho piri rāua!'",
	      english:"'You cannot separate them,' said Tāwhirimātea. 'Give it up, they are meant to be together!'"
	    },
	    {
	      tereo:"Heoi anō, kāore anō kia mutu a Tāne Mahuta, ka takoto i runga i tana tuara, ka hikina ana waewae ki tana uma, ka tīmata tana pēhi mai i raro. Ka pēhi ia, kāore i aha. Ka pēhi anō a ia me āna kaha katoa, kāore tonu i aha. Ka hēhē a ia, ka pēhi anō. Ka tukuna e ia tana hā, ka pēhi anō, ka puta he kaha e whakawiri ana i tana tinana. Mea rawa ake ka tīmata te nekeneke, te nukunuku.",
	      english:"But Tāne Mahuta wasn't finished. He lay on his back, pulled his legs to his chest then pushed from below. Slowly he pushed, but still nothing happened. Again he pushed, using all his strength, but nothing happened. He took a breath and pushed once more. Releasing his breath, and taking another, he pushed again, a new surge of strength pumping through his body. And at last there was movement."
	    },
	    {
	      tereo:"Ka puta te wehi a Tāwhirimātea, 'Kāo!'",
	      english:"Tāwhirimātea roared with fury, 'No!'"
	    },
	    {
	      tereo:"I tōmuri rawa ia. Kua wehea kēhia a Ranginui rāua ko Papatūānuku, ka puta ake rātau ki te ao mārama. Ka noho ngā tama a Rangi i runga i te ohorere, i runga hoki i te wahangū, me te kaupare i ō rātau kanohi i te māramatanga o Tamanuiterā, e pōkia nei rātau e tōna mahana.",
	      english:"But it was too late. Ranginui and Papatūānuku were forced apart, and light filled the world. The brothers lay in shocked silence covering their eyes from the brightness of Tamanuiterā shining down on their cowering bodies."
	    },
	    {
	      tereo:"Ko Tāwhirimātea te tuatahi ki te peke ake. Ka wepua e ia ana tuākana, me tana kori i runga i tōna whakatakaririhanga.  'E kore au e tuku i a koutou kia noho pai, tae atu ki ā koutou huānga, e kore hoki koutou e noho pai, ā, mutu noa! Ka noho ko tēnei tōku tūrangawaewae, ka rongo tonu koutou i tōku ihi, i tōku wehi.' Koinei rā te ōhākī o Tāwhirimātea ki ōna tuākana, i a ia e kake ana ki tana matua i te rangi.",
	      english:"Tāwhirimātea was first to jump to his feet, lashing out at the others in anger. 'I will never let you rest for what you have done, even your children won't be safe from my clutches! This will be my domain forever and you will always feel my wrath,' he called to the other children, and he flew up to join his father."
	    },
	    {
	      tereo:"Ka noho tonu te kōrero a Tāwhirimātea, ā, tae noa mai ki tēnei rā. I ētahi wā ka noho tonu a ia i runga i ngā kōrero a ōna mātua, kia murua ngā hara a ōna tuākana. Nā, ko ēnei rā, ngā rā paki, e whiti mai hoki te rā, he āio hoki.",
	      english:"As time passed animals, plants and people grew in the light of the sun. The mokopuna of Ranginui and Papatūānuku populated the world. Tāwhirimātea kept his promise living in the realm of his father, the sky. He became the guardian of the winds, Ngā hau e whā, and continues to be so to this day."
	    },
	    {
	      tereo:"Heoi anō, i ētahi wā, kua hoki ake a ia ki te wā i wehea ōna mātua, kua rongo hoki i te mamae, i tō rāua nanao atu ki a rāua anō. I ēnei rā, kua tonoa e ia ōna huānga, arā ngā āwhā me ngā huripari, e korara ai ngā ao a ōna tuākana me ā rātau huānga hoki.",
	      english:"Sometimes Tāwhirimātea is content to listen to advice from his parents and forgive his siblings. On those days the weather is fine, clear and calm. But sometimes he is reminded of the pain his parents endured when they were separated, and the longing they still have for each other. On those days he sends tornadoes, hurricanes, and cyclones to hound the descendants of those that betrayed him."
	    }
	  ]),
	  author: 'Laura',
	  translator: 'Alex'
	},
	// 	{name: "ar",
	// 	url: "/ar",
	// 	short_title:JSON.stringify(

	// 		{tereo:"ATUA_AR",
	// 		english:"ATUA_AR"}),
	// 	title:JSON.stringify(
	// 		{tereo:"ATUA_AR",
	// 		english:"ATUA_AR"
	// 		}
	// 	),
	// 	paragraphs:JSON.stringify([
	// 		{tereo:"lorum ipsum",
	// 			english:"english lorum ipsum"
	// 		}
	// 	]),
	// 	author: 'Laura',
	// 	translator: 'Alex'
	// },
	{name: "about",
	 url: "about",
	 short_title:JSON.stringify(

	   {tereo:"TŌ MĀTOU KAUPAPA",
	    english:"ABOUT ATUA_AR"}),
	 title:JSON.stringify(
	   {tereo:"TŌ MĀTOU KAUPAPA",
	    english:"ABOUT ATUA_AR"
	   }
	 ),
	  paragraphs:JSON.stringify([
	    {tereo:"lorum ipsum",
	     english:"english lorum ipsum"
	    }
	  ]),
	  author: 'Laura',
	  translator: 'Alex'
	}
      ]);
    });
};
