const flags = [
  {
    id: 'ad',
    image: './bandeiras/imgs/flags/ad.svg',
    name: 'Andorra',
  },
  {
    id: 'ae',
    image: './bandeiras/imgs/flags/ae.svg',
    name: 'United Arab Emirates',
  },
  {
    id: 'af',
    image: './bandeiras/imgs/flags/af.svg',
    name: 'Afghanistan',
  },
  {
    id: 'ag',
    image: './bandeiras/imgs/flags/ag.svg',
    name: 'Antigua and Barbuda',
  },
  {
    id: 'ai',
    image: './bandeiras/imgs/flags/ai.svg',
    name: 'Anguilla',
  },
  {
    id: 'al',
    image: './bandeiras/imgs/flags/al.svg',
    name: 'Albania',
  },
  {
    id: 'am',
    image: './bandeiras/imgs/flags/am.svg',
    name: 'Armenia',
  },
  {
    id: 'an',
    image: './bandeiras/imgs/flags/an.svg',
    name: 'Netherlands Antilles',
  },
  {
    id: 'ao',
    image: './bandeiras/imgs/flags/ao.svg',
    name: 'Angola',
  },
  {
    id: 'aq',
    image: './bandeiras/imgs/flags/aq.svg',
    name: 'Antarctica',
  },
  {
    id: 'ar',
    image: './bandeiras/imgs/flags/ar.svg',
    name: 'Argentina',
  },
  {
    id: 'as',
    image: './bandeiras/imgs/flags/as.svg',
    name: 'American Samoa',
  },
  {
    id: 'at',
    image: './bandeiras/imgs/flags/at.svg',
    name: 'Austria',
  },
  {
    id: 'au',
    image: './bandeiras/imgs/flags/au.svg',
    name: 'Australia',
  },
  {
    id: 'aw',
    image: './bandeiras/imgs/flags/aw.svg',
    name: 'Aruba',
  },
  {
    id: 'ax',
    image: './bandeiras/imgs/flags/ax.svg',
    name: 'Åland Islands',
  },
  {
    id: 'az',
    image: './bandeiras/imgs/flags/az.svg',
    name: 'Azerbaijan',
  },
  {
    id: 'ba',
    image: './bandeiras/imgs/flags/ba.svg',
    name: 'Bosnia and Herzegovina',
  },
  {
    id: 'bb',
    image: './bandeiras/imgs/flags/bb.svg',
    name: 'Barbados',
  },
  {
    id: 'bd',
    image: './bandeiras/imgs/flags/bd.svg',
    name: 'Bangladesh',
  },
  {
    id: 'be',
    image: './bandeiras/imgs/flags/be.svg',
    name: 'Belgium',
  },
  {
    id: 'bf',
    image: './bandeiras/imgs/flags/bf.svg',
    name: 'Burkina Faso',
  },
  {
    id: 'bg',
    image: './bandeiras/imgs/flags/bg.svg',
    name: 'Bulgaria',
  },
  {
    id: 'bh',
    image: './bandeiras/imgs/flags/bh.svg',
    name: 'Bahrain',
  },
  {
    id: 'bi',
    image: './bandeiras/imgs/flags/bi.svg',
    name: 'Burundi',
  },
  {
    id: 'bj',
    image: './bandeiras/imgs/flags/bj.svg',
    name: 'Benin',
  },
  {
    id: 'bl',
    image: './bandeiras/imgs/flags/bl.svg',
    name: 'Saint Barthélemy',
  },
  {
    id: 'bm',
    image: './bandeiras/imgs/flags/bm.svg',
    name: 'Bermuda',
  },
  {
    id: 'bn',
    image: './bandeiras/imgs/flags/bn.svg',
    name: 'Brunei Darussalam',
  },
  {
    id: 'bo',
    image: './bandeiras/imgs/flags/bo.svg',
    name: 'Bolivia',
  },
  {
    id: 'bq',
    image: './bandeiras/imgs/flags/bq.svg',
    name: 'Bonaire, Sint Eustatius and Saba',
  },
  {
    id: 'br',
    image: './bandeiras/imgs/flags/br.svg',
    name: 'Brazil',
  },
  {
    id: 'bs',
    image: './bandeiras/imgs/flags/bs.svg',
    name: 'Bahamas',
  },
  {
    id: 'bt',
    image: './bandeiras/imgs/flags/bt.svg',
    name: 'Bhutan',
  },
  {
    id: 'bv',
    image: './bandeiras/imgs/flags/bv.svg',
    name: 'Bouvet Island',
  },
  {
    id: 'bw',
    image: './bandeiras/imgs/flags/bw.svg',
    name: 'Botswana',
  },
  {
    id: 'by',
    image: './bandeiras/imgs/flags/by.svg',
    name: 'Belarus',
  },
  {
    id: 'bz',
    image: './bandeiras/imgs/flags/bz.svg',
    name: 'Belize',
  },
  {
    id: 'ca',
    image: './bandeiras/imgs/flags/ca.svg',
    name: 'Canada',
  },
  {
    id: 'cc',
    image: './bandeiras/imgs/flags/cc.svg',
    name: 'Cocos (Keeling) Islands',
  },
  {
    id: 'cd',
    image: './bandeiras/imgs/flags/cd.svg',
    name: 'Congo, The Democratic Republic Of The',
  },
  {
    id: 'cf',
    image: './bandeiras/imgs/flags/cf.svg',
    name: 'Central African Republic',
  },
  {
    id: 'cg',
    image: './bandeiras/imgs/flags/cg.svg',
    name: 'Congo',
  },
  {
    id: 'ch',
    image: './bandeiras/imgs/flags/ch.svg',
    name: 'Switzerland',
  },
  {
    id: 'ci',
    image: './bandeiras/imgs/flags/ci.svg',
    name: "Côte D'Ivoire",
  },
  {
    id: 'ck',
    image: './bandeiras/imgs/flags/ck.svg',
    name: 'Cook Islands',
  },
  {
    id: 'cl',
    image: './bandeiras/imgs/flags/cl.svg',
    name: 'Chile',
  },
  {
    id: 'cm',
    image: './bandeiras/imgs/flags/cm.svg',
    name: 'Cameroon',
  },
  {
    id: 'cn',
    image: './bandeiras/imgs/flags/cn.svg',
    name: 'China',
  },
  {
    id: 'co',
    image: './bandeiras/imgs/flags/co.svg',
    name: 'Colombia',
  },
  {
    id: 'cr',
    image: './bandeiras/imgs/flags/cr.svg',
    name: 'Costa Rica',
  },
  {
    id: 'cu',
    image: './bandeiras/imgs/flags/cu.svg',
    name: 'Cuba',
  },
  {
    id: 'cv',
    image: './bandeiras/imgs/flags/cv.svg',
    name: 'Cape Verde',
  },
  {
    id: 'cw',
    image: './bandeiras/imgs/flags/cw.svg',
    name: 'Curaçao',
  },
  {
    id: 'cx',
    image: './bandeiras/imgs/flags/cx.svg',
    name: 'Christmas Island',
  },
  {
    id: 'cy',
    image: './bandeiras/imgs/flags/cy.svg',
    name: 'Cyprus',
  },
  {
    id: 'cz',
    image: './bandeiras/imgs/flags/cz.svg',
    name: 'Czech Republic',
  },
  {
    id: 'de',
    image: './bandeiras/imgs/flags/de.svg',
    name: 'Germany',
  },
  {
    id: 'dj',
    image: './bandeiras/imgs/flags/dj.svg',
    name: 'Djibouti',
  },
  {
    id: 'dk',
    image: './bandeiras/imgs/flags/dk.svg',
    name: 'Denmark',
  },
  {
    id: 'dm',
    image: './bandeiras/imgs/flags/dm.svg',
    name: 'Dominica',
  },
  {
    id: 'do',
    image: './bandeiras/imgs/flags/do.svg',
    name: 'Dominican Republic',
  },
  {
    id: 'dz',
    image: './bandeiras/imgs/flags/dz.svg',
    name: 'Algeria',
  },
  {
    id: 'ec',
    image: './bandeiras/imgs/flags/ec.svg',
    name: 'Ecuador',
  },
  {
    id: 'ee',
    image: './bandeiras/imgs/flags/ee.svg',
    name: 'Estonia',
  },
  {
    id: 'eg',
    image: './bandeiras/imgs/flags/eg.svg',
    name: 'Egypt',
  },
  {
    id: 'eh',
    image: './bandeiras/imgs/flags/eh.svg',
    name: 'Western Sahara',
  },
  {
    id: 'er',
    image: './bandeiras/imgs/flags/er.svg',
    name: 'Eritrea',
  },
  {
    id: 'es',
    image: './bandeiras/imgs/flags/es.svg',
    name: 'Spain',
  },
  {
    id: 'et',
    image: './bandeiras/imgs/flags/et.svg',
    name: 'Ethiopia',
  },
  {
    id: 'fi',
    image: './bandeiras/imgs/flags/fi.svg',
    name: 'Finland',
  },
  {
    id: 'fj',
    image: './bandeiras/imgs/flags/fj.svg',
    name: 'Fiji',
  },
  {
    id: 'fk',
    image: './bandeiras/imgs/flags/fk.svg',
    name: 'Falkland Islands (Malvinas)',
  },
  {
    id: 'fm',
    image: './bandeiras/imgs/flags/fm.svg',
    name: 'Micronesia, Federated States Of',
  },
  {
    id: 'fo',
    image: './bandeiras/imgs/flags/fo.svg',
    name: 'Faroe Islands',
  },
  {
    id: 'fr',
    image: './bandeiras/imgs/flags/fr.svg',
    name: 'France',
  },
  {
    id: 'ga',
    image: './bandeiras/imgs/flags/ga.svg',
    name: 'Gabon',
  },
  {
    id: 'gb',
    image: './bandeiras/imgs/flags/gb.svg',
    name: 'United Kingdom',
  },
  {
    id: 'gd',
    image: './bandeiras/imgs/flags/gd.svg',
    name: 'Grenada',
  },
  {
    id: 'ge',
    image: './bandeiras/imgs/flags/ge.svg',
    name: 'Georgia',
  },
  {
    id: 'gf',
    image: './bandeiras/imgs/flags/gf.svg',
    name: 'French Guiana',
  },
  {
    id: 'gg',
    image: './bandeiras/imgs/flags/gg.svg',
    name: 'Guernsey',
  },
  {
    id: 'gh',
    image: './bandeiras/imgs/flags/gh.svg',
    name: 'Ghana',
  },
  {
    id: 'gi',
    image: './bandeiras/imgs/flags/gi.svg',
    name: 'Gibraltar',
  },
  {
    id: 'gl',
    image: './bandeiras/imgs/flags/gl.svg',
    name: 'Greenland',
  },
  {
    id: 'gm',
    image: './bandeiras/imgs/flags/gm.svg',
    name: 'Gambia',
  },
  {
    id: 'gn',
    image: './bandeiras/imgs/flags/gn.svg',
    name: 'Guinea',
  },
  {
    id: 'gp',
    image: './bandeiras/imgs/flags/gp.svg',
    name: 'Guadeloupe',
  },
  {
    id: 'gq',
    image: './bandeiras/imgs/flags/gq.svg',
    name: 'Equatorial Guinea',
  },
  {
    id: 'gr',
    image: './bandeiras/imgs/flags/gr.svg',
    name: 'Greece',
  },
  {
    id: 'gs',
    image: './bandeiras/imgs/flags/gs.svg',
    name: 'South Georgia and the South Sandwich Islands',
  },
  {
    id: 'gt',
    image: './bandeiras/imgs/flags/gt.svg',
    name: 'Guatemala',
  },
  {
    id: 'gu',
    image: './bandeiras/imgs/flags/gu.svg',
    name: 'Guam',
  },
  {
    id: 'gw',
    image: './bandeiras/imgs/flags/gw.svg',
    name: 'Guinea-Bissau',
  },
  {
    id: 'gy',
    image: './bandeiras/imgs/flags/gy.svg',
    name: 'Guyana',
  },
  {
    id: 'hk',
    image: './bandeiras/imgs/flags/hk.svg',
    name: 'Hong Kong',
  },
  {
    id: 'hm',
    image: './bandeiras/imgs/flags/hm.svg',
    name: 'Heard and McDonald Islands',
  },
  {
    id: 'hn',
    image: './bandeiras/imgs/flags/hn.svg',
    name: 'Honduras',
  },
  {
    id: 'hr',
    image: './bandeiras/imgs/flags/hr.svg',
    name: 'Croatia',
  },
  {
    id: 'ht',
    image: './bandeiras/imgs/flags/ht.svg',
    name: 'Haiti',
  },
  {
    id: 'hu',
    image: './bandeiras/imgs/flags/hu.svg',
    name: 'Hungary',
  },
  {
    id: 'id',
    image: './bandeiras/imgs/flags/id.svg',
    name: 'Indonesia',
  },
  {
    id: 'ie',
    image: './bandeiras/imgs/flags/ie.svg',
    name: 'Ireland',
  },
  {
    id: 'il',
    image: './bandeiras/imgs/flags/il.svg',
    name: 'Israel',
  },
  {
    id: 'im',
    image: './bandeiras/imgs/flags/im.svg',
    name: 'Isle of Man',
  },
  {
    id: 'in',
    image: './bandeiras/imgs/flags/in.svg',
    name: 'India',
  },
  {
    id: 'io',
    image: './bandeiras/imgs/flags/io.svg',
    name: 'British Indian Ocean Territory',
  },
  {
    id: 'iq',
    image: './bandeiras/imgs/flags/iq.svg',
    name: 'Iraq',
  },
  {
    id: 'ir',
    image: './bandeiras/imgs/flags/ir.svg',
    name: 'Iran, Islamic Republic Of',
  },
  {
    id: 'is',
    image: './bandeiras/imgs/flags/is.svg',
    name: 'Iceland',
  },
  {
    id: 'it',
    image: './bandeiras/imgs/flags/it.svg',
    name: 'Italy',
  },
  {
    id: 'je',
    image: './bandeiras/imgs/flags/je.svg',
    name: 'Jersey',
  },
  {
    id: 'jm',
    image: './bandeiras/imgs/flags/jm.svg',
    name: 'Jamaica',
  },
  {
    id: 'jo',
    image: './bandeiras/imgs/flags/jo.svg',
    name: 'Jordan',
  },
  {
    id: 'jp',
    image: './bandeiras/imgs/flags/jp.svg',
    name: 'Japan',
  },
  {
    id: 'ke',
    image: './bandeiras/imgs/flags/ke.svg',
    name: 'Kenya',
  },
  {
    id: 'kg',
    image: './bandeiras/imgs/flags/kg.svg',
    name: 'Kyrgyzstan',
  },
  {
    id: 'kh',
    image: './bandeiras/imgs/flags/kh.svg',
    name: 'Cambodia',
  },
  {
    id: 'ki',
    image: './bandeiras/imgs/flags/ki.svg',
    name: 'Kiribati',
  },
  {
    id: 'km',
    image: './bandeiras/imgs/flags/km.svg',
    name: 'Comoros',
  },
  {
    id: 'kn',
    image: './bandeiras/imgs/flags/kn.svg',
    name: 'Saint Kitts And Nevis',
  },
  {
    id: 'kp',
    image: './bandeiras/imgs/flags/kp.svg',
    name: "Korea, Democratic People's Republic Of",
  },
  {
    id: 'kr',
    image: './bandeiras/imgs/flags/kr.svg',
    name: 'Korea, Republic of',
  },
  {
    id: 'kw',
    image: './bandeiras/imgs/flags/kw.svg',
    name: 'Kuwait',
  },
  {
    id: 'ky',
    image: './bandeiras/imgs/flags/ky.svg',
    name: 'Cayman Islands',
  },
  {
    id: 'kz',
    image: './bandeiras/imgs/flags/kz.svg',
    name: 'Kazakhstan',
  },
  {
    id: 'la',
    image: './bandeiras/imgs/flags/la.svg',
    name: "Lao People's Democratic Republic",
  },
  {
    id: 'lb',
    image: './bandeiras/imgs/flags/lb.svg',
    name: 'Lebanon',
  },
  {
    id: 'lc',
    image: './bandeiras/imgs/flags/lc.svg',
    name: 'Saint Lucia',
  },
  {
    id: 'li',
    image: './bandeiras/imgs/flags/li.svg',
    name: 'Liechtenstein',
  },
  {
    id: 'lk',
    image: './bandeiras/imgs/flags/lk.svg',
    name: 'Sri Lanka',
  },
  {
    id: 'lr',
    image: './bandeiras/imgs/flags/lr.svg',
    name: 'Liberia',
  },
  {
    id: 'ls',
    image: './bandeiras/imgs/flags/ls.svg',
    name: 'Lesotho',
  },
  {
    id: 'lt',
    image: './bandeiras/imgs/flags/lt.svg',
    name: 'Lithuania',
  },
  {
    id: 'lu',
    image: './bandeiras/imgs/flags/lu.svg',
    name: 'Luxembourg',
  },
  {
    id: 'lv',
    image: './bandeiras/imgs/flags/lv.svg',
    name: 'Latvia',
  },
  {
    id: 'ly',
    image: './bandeiras/imgs/flags/ly.svg',
    name: 'Libya',
  },
  {
    id: 'ma',
    image: './bandeiras/imgs/flags/ma.svg',
    name: 'Morocco',
  },
  {
    id: 'mc',
    image: './bandeiras/imgs/flags/mc.svg',
    name: 'Monaco',
  },
  {
    id: 'md',
    image: './bandeiras/imgs/flags/md.svg',
    name: 'Moldova, Republic of',
  },
  {
    id: 'me',
    image: './bandeiras/imgs/flags/me.svg',
    name: 'Montenegro',
  },
  {
    id: 'mf',
    image: './bandeiras/imgs/flags/mf.svg',
    name: 'Saint Martin',
  },
  {
    id: 'mg',
    image: './bandeiras/imgs/flags/mg.svg',
    name: 'Madagascar',
  },
  {
    id: 'mh',
    image: './bandeiras/imgs/flags/mh.svg',
    name: 'Marshall Islands',
  },
  {
    id: 'mk',
    image: './bandeiras/imgs/flags/mk.svg',
    name: 'Macedonia, the Former Yugoslav Republic Of',
  },
  {
    id: 'ml',
    image: './bandeiras/imgs/flags/ml.svg',
    name: 'Mali',
  },
  {
    id: 'mm',
    image: './bandeiras/imgs/flags/mm.svg',
    name: 'Myanmar',
  },
  {
    id: 'mn',
    image: './bandeiras/imgs/flags/mn.svg',
    name: 'Mongolia',
  },
  {
    id: 'mo',
    image: './bandeiras/imgs/flags/mo.svg',
    name: 'Macao',
  },
  {
    id: 'mp',
    image: './bandeiras/imgs/flags/mp.svg',
    name: 'Northern Mariana Islands',
  },
  {
    id: 'mq',
    image: './bandeiras/imgs/flags/mq.svg',
    name: 'Martinique',
  },
  {
    id: 'mr',
    image: './bandeiras/imgs/flags/mr.svg',
    name: 'Mauritania',
  },
  {
    id: 'ms',
    image: './bandeiras/imgs/flags/ms.svg',
    name: 'Montserrat',
  },
  {
    id: 'mt',
    image: './bandeiras/imgs/flags/mt.svg',
    name: 'Malta',
  },
  {
    id: 'mu',
    image: './bandeiras/imgs/flags/mu.svg',
    name: 'Mauritius',
  },
  {
    id: 'mv',
    image: './bandeiras/imgs/flags/mv.svg',
    name: 'Maldives',
  },
  {
    id: 'mw',
    image: './bandeiras/imgs/flags/mw.svg',
    name: 'Malawi',
  },
  {
    id: 'mx',
    image: './bandeiras/imgs/flags/mx.svg',
    name: 'Mexico',
  },
  {
    id: 'my',
    image: './bandeiras/imgs/flags/my.svg',
    name: 'Malaysia',
  },
  {
    id: 'mz',
    image: './bandeiras/imgs/flags/mz.svg',
    name: 'Mozambique',
  },
  {
    id: 'na',
    image: './bandeiras/imgs/flags/na.svg',
    name: 'Namibia',
  },
  {
    id: 'nc',
    image: './bandeiras/imgs/flags/nc.svg',
    name: 'New Caledonia',
  },
  {
    id: 'ne',
    image: './bandeiras/imgs/flags/ne.svg',
    name: 'Niger',
  },
  {
    id: 'nf',
    image: './bandeiras/imgs/flags/nf.svg',
    name: 'Norfolk Island',
  },
  {
    id: 'ng',
    image: './bandeiras/imgs/flags/ng.svg',
    name: 'Nigeria',
  },
  {
    id: 'ni',
    image: './bandeiras/imgs/flags/ni.svg',
    name: 'Nicaragua',
  },
  {
    id: 'nl',
    image: './bandeiras/imgs/flags/nl.svg',
    name: 'Netherlands',
  },
  {
    id: 'no',
    image: './bandeiras/imgs/flags/no.svg',
    name: 'Norway',
  },
  {
    id: 'np',
    image: './bandeiras/imgs/flags/np.svg',
    name: 'Nepal',
  },
  {
    id: 'nr',
    image: './bandeiras/imgs/flags/nr.svg',
    name: 'Nauru',
  },
  {
    id: 'nu',
    image: './bandeiras/imgs/flags/nu.svg',
    name: 'Niue',
  },
  {
    id: 'nz',
    image: './bandeiras/imgs/flags/nz.svg',
    name: 'New Zealand',
  },
  {
    id: 'om',
    image: './bandeiras/imgs/flags/om.svg',
    name: 'Oman',
  },
  {
    id: 'pa',
    image: './bandeiras/imgs/flags/pa.svg',
    name: 'Panama',
  },
  {
    id: 'pe',
    image: './bandeiras/imgs/flags/pe.svg',
    name: 'Peru',
  },
  {
    id: 'pf',
    image: './bandeiras/imgs/flags/pf.svg',
    name: 'French Polynesia',
  },
  {
    id: 'pg',
    image: './bandeiras/imgs/flags/pg.svg',
    name: 'Papua New Guinea',
  },
  {
    id: 'ph',
    image: './bandeiras/imgs/flags/ph.svg',
    name: 'Philippines',
  },
  {
    id: 'pk',
    image: './bandeiras/imgs/flags/pk.svg',
    name: 'Pakistan',
  },
  {
    id: 'pl',
    image: './bandeiras/imgs/flags/pl.svg',
    name: 'Poland',
  },
  {
    id: 'pm',
    image: './bandeiras/imgs/flags/pm.svg',
    name: 'Saint Pierre And Miquelon',
  },
  {
    id: 'pn',
    image: './bandeiras/imgs/flags/pn.svg',
    name: 'Pitcairn',
  },
  {
    id: 'pr',
    image: './bandeiras/imgs/flags/pr.svg',
    name: 'Puerto Rico',
  },
  {
    id: 'ps',
    image: './bandeiras/imgs/flags/ps.svg',
    name: 'Palestine, State of',
  },
  {
    id: 'pt',
    image: './bandeiras/imgs/flags/pt.svg',
    name: 'Portugal',
  },
  {
    id: 'pw',
    image: './bandeiras/imgs/flags/pw.svg',
    name: 'Palau',
  },
  {
    id: 'py',
    image: './bandeiras/imgs/flags/py.svg',
    name: 'Paraguay',
  },
  {
    id: 'qa',
    image: './bandeiras/imgs/flags/qa.svg',
    name: 'Qatar',
  },
  {
    id: 're',
    image: './bandeiras/imgs/flags/re.svg',
    name: 'Réunion',
  },
  {
    id: 'ro',
    image: './bandeiras/imgs/flags/ro.svg',
    name: 'Romania',
  },
  {
    id: 'rs',
    image: './bandeiras/imgs/flags/rs.svg',
    name: 'Serbia',
  },
  {
    id: 'ru',
    image: './bandeiras/imgs/flags/ru.svg',
    name: 'Russian Federation',
  },
  {
    id: 'rw',
    image: './bandeiras/imgs/flags/rw.svg',
    name: 'Rwanda',
  },
  {
    id: 'sa',
    image: './bandeiras/imgs/flags/sa.svg',
    name: 'Saudi Arabia',
  },
  {
    id: 'sb',
    image: './bandeiras/imgs/flags/sb.svg',
    name: 'Solomon Islands',
  },
  {
    id: 'sc',
    image: './bandeiras/imgs/flags/sc.svg',
    name: 'Seychelles',
  },
  {
    id: 'sd',
    image: './bandeiras/imgs/flags/sd.svg',
    name: 'Sudan',
  },
  {
    id: 'se',
    image: './bandeiras/imgs/flags/se.svg',
    name: 'Sweden',
  },
  {
    id: 'sg',
    image: './bandeiras/imgs/flags/sg.svg',
    name: 'Singapore',
  },
  {
    id: 'sh',
    image: './bandeiras/imgs/flags/sh.svg',
    name: 'Saint Helena',
  },
  {
    id: 'si',
    image: './bandeiras/imgs/flags/si.svg',
    name: 'Slovenia',
  },
  {
    id: 'sj',
    image: './bandeiras/imgs/flags/sj.svg',
    name: 'Svalbard And Jan Mayen',
  },
  {
    id: 'sk',
    image: './bandeiras/imgs/flags/sk.svg',
    name: 'Slovakia',
  },
  {
    id: 'sl',
    image: './bandeiras/imgs/flags/sl.svg',
    name: 'Sierra Leone',
  },
  {
    id: 'sm',
    image: './bandeiras/imgs/flags/sm.svg',
    name: 'San Marino',
  },
  {
    id: 'sn',
    image: './bandeiras/imgs/flags/sn.svg',
    name: 'Senegal',
  },
  {
    id: 'so',
    image: './bandeiras/imgs/flags/so.svg',
    name: 'Somalia',
  },
  {
    id: 'sr',
    image: './bandeiras/imgs/flags/sr.svg',
    name: 'Suriname',
  },
  {
    id: 'ss',
    image: './bandeiras/imgs/flags/ss.svg',
    name: 'South Sudan',
  },
  {
    id: 'st',
    image: './bandeiras/imgs/flags/st.svg',
    name: 'Sao Tome and Principe',
  },
  {
    id: 'sv',
    image: './bandeiras/imgs/flags/sv.svg',
    name: 'El Salvador',
  },
  {
    id: 'sx',
    image: './bandeiras/imgs/flags/sx.svg',
    name: 'Sint Maarten',
  },
  {
    id: 'sy',
    image: './bandeiras/imgs/flags/sy.svg',
    name: 'Syrian Arab Republic',
  },
  {
    id: 'sz',
    image: './bandeiras/imgs/flags/sz.svg',
    name: 'Swaziland',
  },
  {
    id: 'tc',
    image: './bandeiras/imgs/flags/tc.svg',
    name: 'Turks and Caicos Islands',
  },
  {
    id: 'td',
    image: './bandeiras/imgs/flags/td.svg',
    name: 'Chad',
  },
  {
    id: 'tf',
    image: './bandeiras/imgs/flags/tf.svg',
    name: 'French Southern Territories',
  },
  {
    id: 'tg',
    image: './bandeiras/imgs/flags/tg.svg',
    name: 'Togo',
  },
  {
    id: 'th',
    image: './bandeiras/imgs/flags/th.svg',
    name: 'Thailand',
  },
  {
    id: 'tj',
    image: './bandeiras/imgs/flags/tj.svg',
    name: 'Tajikistan',
  },
  {
    id: 'tk',
    image: './bandeiras/imgs/flags/tk.svg',
    name: 'Tokelau',
  },
  {
    id: 'tl',
    image: './bandeiras/imgs/flags/tl.svg',
    name: 'Timor-Leste',
  },
  {
    id: 'tm',
    image: './bandeiras/imgs/flags/tm.svg',
    name: 'Turkmenistan',
  },
  {
    id: 'tn',
    image: './bandeiras/imgs/flags/tn.svg',
    name: 'Tunisia',
  },
  {
    id: 'to',
    image: './bandeiras/imgs/flags/to.svg',
    name: 'Tonga',
  },
  {
    id: 'tr',
    image: './bandeiras/imgs/flags/tr.svg',
    name: 'Turkey',
  },
  {
    id: 'tt',
    image: './bandeiras/imgs/flags/tt.svg',
    name: 'Trinidad and Tobago',
  },
  {
    id: 'tv',
    image: './bandeiras/imgs/flags/tv.svg',
    name: 'Tuvalu',
  },
  {
    id: 'tw',
    image: './bandeiras/imgs/flags/tw.svg',
    name: 'Taiwan, Republic Of China',
  },
  {
    id: 'tz',
    image: './bandeiras/imgs/flags/tz.svg',
    name: 'Tanzania, United Republic of',
  },
  {
    id: 'ua',
    image: './bandeiras/imgs/flags/ua.svg',
    name: 'Ukraine',
  },
  {
    id: 'ug',
    image: './bandeiras/imgs/flags/ug.svg',
    name: 'Uganda',
  },
  {
    id: 'um',
    image: './bandeiras/imgs/flags/um.svg',
    name: 'United States Minor Outlying Islands',
  },
  {
    id: 'us',
    image: './bandeiras/imgs/flags/us.svg',
    name: 'United States',
  },
  {
    id: 'uy',
    image: './bandeiras/imgs/flags/uy.svg',
    name: 'Uruguay',
  },
  {
    id: 'uz',
    image: './bandeiras/imgs/flags/uz.svg',
    name: 'Uzbekistan',
  },
  {
    id: 'va',
    image: './bandeiras/imgs/flags/va.svg',
    name: 'Holy See (Vatican City State)',
  },
  {
    id: 'vc',
    image: './bandeiras/imgs/flags/vc.svg',
    name: 'Saint Vincent And The Grenadines',
  },
  {
    id: 've',
    image: './bandeiras/imgs/flags/ve.svg',
    name: 'Venezuela, Bolivarian Republic of',
  },
  {
    id: 'vg',
    image: './bandeiras/imgs/flags/vg.svg',
    name: 'Virgin Islands, British',
  },
  {
    id: 'vi',
    image: './bandeiras/imgs/flags/vi.svg',
    name: 'Virgin Islands, U.S.',
  },
  {
    id: 'vn',
    image: './bandeiras/imgs/flags/vn.svg',
    name: 'Vietnam',
  },
  {
    id: 'vu',
    image: './bandeiras/imgs/flags/vu.svg',
    name: 'Vanuatu',
  },
  {
    id: 'wf',
    image: './bandeiras/imgs/flags/wf.svg',
    name: 'Wallis and Futuna',
  },
  {
    id: 'ws',
    image: './bandeiras/imgs/flags/ws.svg',
    name: 'Samoa',
  },
  {
    id: 'ye',
    image: './bandeiras/imgs/flags/ye.svg',
    name: 'Yemen',
  },
  {
    id: 'yt',
    image: './bandeiras/imgs/flags/yt.svg',
    name: 'Mayotte',
  },
  {
    id: 'za',
    image: './bandeiras/imgs/flags/za.svg',
    name: 'South Africa',
  },
  {
    id: 'zm',
    image: './bandeiras/imgs/flags/zm.svg',
    name: 'Zambia',
  },
  {
    id: 'zw',
    image: './bandeiras/imgs/flags/zw.svg',
    name: 'Zimbabwe',
  },
];

export default flags;