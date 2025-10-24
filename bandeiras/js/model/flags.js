const flags = [
  {
    id: 'ad',
    image: 'imgs/flags/ad.svg',
    name: 'Andorra',
  },
  {
    id: 'ae',
    image: 'imgs/flags/ae.svg',
    name: 'United Arab Emirates',
  },
  {
    id: 'af',
    image: 'imgs/flags/af.svg',
    name: 'Afghanistan',
  },
  {
    id: 'ag',
    image: 'imgs/flags/ag.svg',
    name: 'Antigua and Barbuda',
  },
  {
    id: 'ai',
    image: 'imgs/flags/ai.svg',
    name: 'Anguilla',
  },
  {
    id: 'al',
    image: 'imgs/flags/al.svg',
    name: 'Albania',
  },
  {
    id: 'am',
    image: 'imgs/flags/am.svg',
    name: 'Armenia',
  },
  {
    id: 'an',
    image: 'imgs/flags/an.svg',
    name: 'Netherlands Antilles',
  },
  {
    id: 'ao',
    image: 'imgs/flags/ao.svg',
    name: 'Angola',
  },
  {
    id: 'aq',
    image: 'imgs/flags/aq.svg',
    name: 'Antarctica',
  },
  {
    id: 'ar',
    image: 'imgs/flags/ar.svg',
    name: 'Argentina',
  },
  {
    id: 'as',
    image: 'imgs/flags/as.svg',
    name: 'American Samoa',
  },
  {
    id: 'at',
    image: 'imgs/flags/at.svg',
    name: 'Austria',
  },
  {
    id: 'au',
    image: 'imgs/flags/au.svg',
    name: 'Australia',
  },
  {
    id: 'aw',
    image: 'imgs/flags/aw.svg',
    name: 'Aruba',
  },
  {
    id: 'ax',
    image: 'imgs/flags/ax.svg',
    name: 'Åland Islands',
  },
  {
    id: 'az',
    image: 'imgs/flags/az.svg',
    name: 'Azerbaijan',
  },
  {
    id: 'ba',
    image: 'imgs/flags/ba.svg',
    name: 'Bosnia and Herzegovina',
  },
  {
    id: 'bb',
    image: 'imgs/flags/bb.svg',
    name: 'Barbados',
  },
  {
    id: 'bd',
    image: 'imgs/flags/bd.svg',
    name: 'Bangladesh',
  },
  {
    id: 'be',
    image: 'imgs/flags/be.svg',
    name: 'Belgium',
  },
  {
    id: 'bf',
    image: 'imgs/flags/bf.svg',
    name: 'Burkina Faso',
  },
  {
    id: 'bg',
    image: 'imgs/flags/bg.svg',
    name: 'Bulgaria',
  },
  {
    id: 'bh',
    image: 'imgs/flags/bh.svg',
    name: 'Bahrain',
  },
  {
    id: 'bi',
    image: 'imgs/flags/bi.svg',
    name: 'Burundi',
  },
  {
    id: 'bj',
    image: 'imgs/flags/bj.svg',
    name: 'Benin',
  },
  {
    id: 'bl',
    image: 'imgs/flags/bl.svg',
    name: 'Saint Barthélemy',
  },
  {
    id: 'bm',
    image: 'imgs/flags/bm.svg',
    name: 'Bermuda',
  },
  {
    id: 'bn',
    image: 'imgs/flags/bn.svg',
    name: 'Brunei Darussalam',
  },
  {
    id: 'bo',
    image: 'imgs/flags/bo.svg',
    name: 'Bolivia',
  },
  {
    id: 'bq',
    image: 'imgs/flags/bq.svg',
    name: 'Bonaire, Sint Eustatius and Saba',
  },
  {
    id: 'br',
    image: 'imgs/flags/br.svg',
    name: 'Brazil',
  },
  {
    id: 'bs',
    image: 'imgs/flags/bs.svg',
    name: 'Bahamas',
  },
  {
    id: 'bt',
    image: 'imgs/flags/bt.svg',
    name: 'Bhutan',
  },
  {
    id: 'bv',
    image: 'imgs/flags/bv.svg',
    name: 'Bouvet Island',
  },
  {
    id: 'bw',
    image: 'imgs/flags/bw.svg',
    name: 'Botswana',
  },
  {
    id: 'by',
    image: 'imgs/flags/by.svg',
    name: 'Belarus',
  },
  {
    id: 'bz',
    image: 'imgs/flags/bz.svg',
    name: 'Belize',
  },
  {
    id: 'ca',
    image: 'imgs/flags/ca.svg',
    name: 'Canada',
  },
  {
    id: 'cc',
    image: 'imgs/flags/cc.svg',
    name: 'Cocos (Keeling) Islands',
  },
  {
    id: 'cd',
    image: 'imgs/flags/cd.svg',
    name: 'Congo, The Democratic Republic Of The',
  },
  {
    id: 'cf',
    image: 'imgs/flags/cf.svg',
    name: 'Central African Republic',
  },
  {
    id: 'cg',
    image: 'imgs/flags/cg.svg',
    name: 'Congo',
  },
  {
    id: 'ch',
    image: 'imgs/flags/ch.svg',
    name: 'Switzerland',
  },
  {
    id: 'ci',
    image: 'imgs/flags/ci.svg',
    name: "Côte D'Ivoire",
  },
  {
    id: 'ck',
    image: 'imgs/flags/ck.svg',
    name: 'Cook Islands',
  },
  {
    id: 'cl',
    image: 'imgs/flags/cl.svg',
    name: 'Chile',
  },
  {
    id: 'cm',
    image: 'imgs/flags/cm.svg',
    name: 'Cameroon',
  },
  {
    id: 'cn',
    image: 'imgs/flags/cn.svg',
    name: 'China',
  },
  {
    id: 'co',
    image: 'imgs/flags/co.svg',
    name: 'Colombia',
  },
  {
    id: 'cr',
    image: 'imgs/flags/cr.svg',
    name: 'Costa Rica',
  },
  {
    id: 'cu',
    image: 'imgs/flags/cu.svg',
    name: 'Cuba',
  },
  {
    id: 'cv',
    image: 'imgs/flags/cv.svg',
    name: 'Cape Verde',
  },
  {
    id: 'cw',
    image: 'imgs/flags/cw.svg',
    name: 'Curaçao',
  },
  {
    id: 'cx',
    image: 'imgs/flags/cx.svg',
    name: 'Christmas Island',
  },
  {
    id: 'cy',
    image: 'imgs/flags/cy.svg',
    name: 'Cyprus',
  },
  {
    id: 'cz',
    image: 'imgs/flags/cz.svg',
    name: 'Czech Republic',
  },
  {
    id: 'de',
    image: 'imgs/flags/de.svg',
    name: 'Germany',
  },
  {
    id: 'dj',
    image: 'imgs/flags/dj.svg',
    name: 'Djibouti',
  },
  {
    id: 'dk',
    image: 'imgs/flags/dk.svg',
    name: 'Denmark',
  },
  {
    id: 'dm',
    image: 'imgs/flags/dm.svg',
    name: 'Dominica',
  },
  {
    id: 'do',
    image: 'imgs/flags/do.svg',
    name: 'Dominican Republic',
  },
  {
    id: 'dz',
    image: 'imgs/flags/dz.svg',
    name: 'Algeria',
  },
  {
    id: 'ec',
    image: 'imgs/flags/ec.svg',
    name: 'Ecuador',
  },
  {
    id: 'ee',
    image: 'imgs/flags/ee.svg',
    name: 'Estonia',
  },
  {
    id: 'eg',
    image: 'imgs/flags/eg.svg',
    name: 'Egypt',
  },
  {
    id: 'eh',
    image: 'imgs/flags/eh.svg',
    name: 'Western Sahara',
  },
  {
    id: 'er',
    image: 'imgs/flags/er.svg',
    name: 'Eritrea',
  },
  {
    id: 'es',
    image: 'imgs/flags/es.svg',
    name: 'Spain',
  },
  {
    id: 'et',
    image: 'imgs/flags/et.svg',
    name: 'Ethiopia',
  },
  {
    id: 'fi',
    image: 'imgs/flags/fi.svg',
    name: 'Finland',
  },
  {
    id: 'fj',
    image: 'imgs/flags/fj.svg',
    name: 'Fiji',
  },
  {
    id: 'fk',
    image: 'imgs/flags/fk.svg',
    name: 'Falkland Islands (Malvinas)',
  },
  {
    id: 'fm',
    image: 'imgs/flags/fm.svg',
    name: 'Micronesia, Federated States Of',
  },
  {
    id: 'fo',
    image: 'imgs/flags/fo.svg',
    name: 'Faroe Islands',
  },
  {
    id: 'fr',
    image: 'imgs/flags/fr.svg',
    name: 'France',
  },
  {
    id: 'ga',
    image: 'imgs/flags/ga.svg',
    name: 'Gabon',
  },
  {
    id: 'gb',
    image: 'imgs/flags/gb.svg',
    name: 'United Kingdom',
  },
  {
    id: 'gd',
    image: 'imgs/flags/gd.svg',
    name: 'Grenada',
  },
  {
    id: 'ge',
    image: 'imgs/flags/ge.svg',
    name: 'Georgia',
  },
  {
    id: 'gf',
    image: 'imgs/flags/gf.svg',
    name: 'French Guiana',
  },
  {
    id: 'gg',
    image: 'imgs/flags/gg.svg',
    name: 'Guernsey',
  },
  {
    id: 'gh',
    image: 'imgs/flags/gh.svg',
    name: 'Ghana',
  },
  {
    id: 'gi',
    image: 'imgs/flags/gi.svg',
    name: 'Gibraltar',
  },
  {
    id: 'gl',
    image: 'imgs/flags/gl.svg',
    name: 'Greenland',
  },
  {
    id: 'gm',
    image: 'imgs/flags/gm.svg',
    name: 'Gambia',
  },
  {
    id: 'gn',
    image: 'imgs/flags/gn.svg',
    name: 'Guinea',
  },
  {
    id: 'gp',
    image: 'imgs/flags/gp.svg',
    name: 'Guadeloupe',
  },
  {
    id: 'gq',
    image: 'imgs/flags/gq.svg',
    name: 'Equatorial Guinea',
  },
  {
    id: 'gr',
    image: 'imgs/flags/gr.svg',
    name: 'Greece',
  },
  {
    id: 'gs',
    image: 'imgs/flags/gs.svg',
    name: 'South Georgia and the South Sandwich Islands',
  },
  {
    id: 'gt',
    image: 'imgs/flags/gt.svg',
    name: 'Guatemala',
  },
  {
    id: 'gu',
    image: 'imgs/flags/gu.svg',
    name: 'Guam',
  },
  {
    id: 'gw',
    image: 'imgs/flags/gw.svg',
    name: 'Guinea-Bissau',
  },
  {
    id: 'gy',
    image: 'imgs/flags/gy.svg',
    name: 'Guyana',
  },
  {
    id: 'hk',
    image: 'imgs/flags/hk.svg',
    name: 'Hong Kong',
  },
  {
    id: 'hm',
    image: 'imgs/flags/hm.svg',
    name: 'Heard and McDonald Islands',
  },
  {
    id: 'hn',
    image: 'imgs/flags/hn.svg',
    name: 'Honduras',
  },
  {
    id: 'hr',
    image: 'imgs/flags/hr.svg',
    name: 'Croatia',
  },
  {
    id: 'ht',
    image: 'imgs/flags/ht.svg',
    name: 'Haiti',
  },
  {
    id: 'hu',
    image: 'imgs/flags/hu.svg',
    name: 'Hungary',
  },
  {
    id: 'id',
    image: 'imgs/flags/id.svg',
    name: 'Indonesia',
  },
  {
    id: 'ie',
    image: 'imgs/flags/ie.svg',
    name: 'Ireland',
  },
  {
    id: 'il',
    image: 'imgs/flags/il.svg',
    name: 'Israel',
  },
  {
    id: 'im',
    image: 'imgs/flags/im.svg',
    name: 'Isle of Man',
  },
  {
    id: 'in',
    image: 'imgs/flags/in.svg',
    name: 'India',
  },
  {
    id: 'io',
    image: 'imgs/flags/io.svg',
    name: 'British Indian Ocean Territory',
  },
  {
    id: 'iq',
    image: 'imgs/flags/iq.svg',
    name: 'Iraq',
  },
  {
    id: 'ir',
    image: 'imgs/flags/ir.svg',
    name: 'Iran, Islamic Republic Of',
  },
  {
    id: 'is',
    image: 'imgs/flags/is.svg',
    name: 'Iceland',
  },
  {
    id: 'it',
    image: 'imgs/flags/it.svg',
    name: 'Italy',
  },
  {
    id: 'je',
    image: 'imgs/flags/je.svg',
    name: 'Jersey',
  },
  {
    id: 'jm',
    image: 'imgs/flags/jm.svg',
    name: 'Jamaica',
  },
  {
    id: 'jo',
    image: 'imgs/flags/jo.svg',
    name: 'Jordan',
  },
  {
    id: 'jp',
    image: 'imgs/flags/jp.svg',
    name: 'Japan',
  },
  {
    id: 'ke',
    image: 'imgs/flags/ke.svg',
    name: 'Kenya',
  },
  {
    id: 'kg',
    image: 'imgs/flags/kg.svg',
    name: 'Kyrgyzstan',
  },
  {
    id: 'kh',
    image: 'imgs/flags/kh.svg',
    name: 'Cambodia',
  },
  {
    id: 'ki',
    image: 'imgs/flags/ki.svg',
    name: 'Kiribati',
  },
  {
    id: 'km',
    image: 'imgs/flags/km.svg',
    name: 'Comoros',
  },
  {
    id: 'kn',
    image: 'imgs/flags/kn.svg',
    name: 'Saint Kitts And Nevis',
  },
  {
    id: 'kp',
    image: 'imgs/flags/kp.svg',
    name: "Korea, Democratic People's Republic Of",
  },
  {
    id: 'kr',
    image: 'imgs/flags/kr.svg',
    name: 'Korea, Republic of',
  },
  {
    id: 'kw',
    image: 'imgs/flags/kw.svg',
    name: 'Kuwait',
  },
  {
    id: 'ky',
    image: 'imgs/flags/ky.svg',
    name: 'Cayman Islands',
  },
  {
    id: 'kz',
    image: 'imgs/flags/kz.svg',
    name: 'Kazakhstan',
  },
  {
    id: 'la',
    image: 'imgs/flags/la.svg',
    name: "Lao People's Democratic Republic",
  },
  {
    id: 'lb',
    image: 'imgs/flags/lb.svg',
    name: 'Lebanon',
  },
  {
    id: 'lc',
    image: 'imgs/flags/lc.svg',
    name: 'Saint Lucia',
  },
  {
    id: 'li',
    image: 'imgs/flags/li.svg',
    name: 'Liechtenstein',
  },
  {
    id: 'lk',
    image: 'imgs/flags/lk.svg',
    name: 'Sri Lanka',
  },
  {
    id: 'lr',
    image: 'imgs/flags/lr.svg',
    name: 'Liberia',
  },
  {
    id: 'ls',
    image: 'imgs/flags/ls.svg',
    name: 'Lesotho',
  },
  {
    id: 'lt',
    image: 'imgs/flags/lt.svg',
    name: 'Lithuania',
  },
  {
    id: 'lu',
    image: 'imgs/flags/lu.svg',
    name: 'Luxembourg',
  },
  {
    id: 'lv',
    image: 'imgs/flags/lv.svg',
    name: 'Latvia',
  },
  {
    id: 'ly',
    image: 'imgs/flags/ly.svg',
    name: 'Libya',
  },
  {
    id: 'ma',
    image: 'imgs/flags/ma.svg',
    name: 'Morocco',
  },
  {
    id: 'mc',
    image: 'imgs/flags/mc.svg',
    name: 'Monaco',
  },
  {
    id: 'md',
    image: 'imgs/flags/md.svg',
    name: 'Moldova, Republic of',
  },
  {
    id: 'me',
    image: 'imgs/flags/me.svg',
    name: 'Montenegro',
  },
  {
    id: 'mf',
    image: 'imgs/flags/mf.svg',
    name: 'Saint Martin',
  },
  {
    id: 'mg',
    image: 'imgs/flags/mg.svg',
    name: 'Madagascar',
  },
  {
    id: 'mh',
    image: 'imgs/flags/mh.svg',
    name: 'Marshall Islands',
  },
  {
    id: 'mk',
    image: 'imgs/flags/mk.svg',
    name: 'Macedonia, the Former Yugoslav Republic Of',
  },
  {
    id: 'ml',
    image: 'imgs/flags/ml.svg',
    name: 'Mali',
  },
  {
    id: 'mm',
    image: 'imgs/flags/mm.svg',
    name: 'Myanmar',
  },
  {
    id: 'mn',
    image: 'imgs/flags/mn.svg',
    name: 'Mongolia',
  },
  {
    id: 'mo',
    image: 'imgs/flags/mo.svg',
    name: 'Macao',
  },
  {
    id: 'mp',
    image: 'imgs/flags/mp.svg',
    name: 'Northern Mariana Islands',
  },
  {
    id: 'mq',
    image: 'imgs/flags/mq.svg',
    name: 'Martinique',
  },
  {
    id: 'mr',
    image: 'imgs/flags/mr.svg',
    name: 'Mauritania',
  },
  {
    id: 'ms',
    image: 'imgs/flags/ms.svg',
    name: 'Montserrat',
  },
  {
    id: 'mt',
    image: 'imgs/flags/mt.svg',
    name: 'Malta',
  },
  {
    id: 'mu',
    image: 'imgs/flags/mu.svg',
    name: 'Mauritius',
  },
  {
    id: 'mv',
    image: 'imgs/flags/mv.svg',
    name: 'Maldives',
  },
  {
    id: 'mw',
    image: 'imgs/flags/mw.svg',
    name: 'Malawi',
  },
  {
    id: 'mx',
    image: 'imgs/flags/mx.svg',
    name: 'Mexico',
  },
  {
    id: 'my',
    image: 'imgs/flags/my.svg',
    name: 'Malaysia',
  },
  {
    id: 'mz',
    image: 'imgs/flags/mz.svg',
    name: 'Mozambique',
  },
  {
    id: 'na',
    image: 'imgs/flags/na.svg',
    name: 'Namibia',
  },
  {
    id: 'nc',
    image: 'imgs/flags/nc.svg',
    name: 'New Caledonia',
  },
  {
    id: 'ne',
    image: 'imgs/flags/ne.svg',
    name: 'Niger',
  },
  {
    id: 'nf',
    image: 'imgs/flags/nf.svg',
    name: 'Norfolk Island',
  },
  {
    id: 'ng',
    image: 'imgs/flags/ng.svg',
    name: 'Nigeria',
  },
  {
    id: 'ni',
    image: 'imgs/flags/ni.svg',
    name: 'Nicaragua',
  },
  {
    id: 'nl',
    image: 'imgs/flags/nl.svg',
    name: 'Netherlands',
  },
  {
    id: 'no',
    image: 'imgs/flags/no.svg',
    name: 'Norway',
  },
  {
    id: 'np',
    image: 'imgs/flags/np.svg',
    name: 'Nepal',
  },
  {
    id: 'nr',
    image: 'imgs/flags/nr.svg',
    name: 'Nauru',
  },
  {
    id: 'nu',
    image: 'imgs/flags/nu.svg',
    name: 'Niue',
  },
  {
    id: 'nz',
    image: 'imgs/flags/nz.svg',
    name: 'New Zealand',
  },
  {
    id: 'om',
    image: 'imgs/flags/om.svg',
    name: 'Oman',
  },
  {
    id: 'pa',
    image: 'imgs/flags/pa.svg',
    name: 'Panama',
  },
  {
    id: 'pe',
    image: 'imgs/flags/pe.svg',
    name: 'Peru',
  },
  {
    id: 'pf',
    image: 'imgs/flags/pf.svg',
    name: 'French Polynesia',
  },
  {
    id: 'pg',
    image: 'imgs/flags/pg.svg',
    name: 'Papua New Guinea',
  },
  {
    id: 'ph',
    image: 'imgs/flags/ph.svg',
    name: 'Philippines',
  },
  {
    id: 'pk',
    image: 'imgs/flags/pk.svg',
    name: 'Pakistan',
  },
  {
    id: 'pl',
    image: 'imgs/flags/pl.svg',
    name: 'Poland',
  },
  {
    id: 'pm',
    image: 'imgs/flags/pm.svg',
    name: 'Saint Pierre And Miquelon',
  },
  {
    id: 'pn',
    image: 'imgs/flags/pn.svg',
    name: 'Pitcairn',
  },
  {
    id: 'pr',
    image: 'imgs/flags/pr.svg',
    name: 'Puerto Rico',
  },
  {
    id: 'ps',
    image: 'imgs/flags/ps.svg',
    name: 'Palestine, State of',
  },
  {
    id: 'pt',
    image: 'imgs/flags/pt.svg',
    name: 'Portugal',
  },
  {
    id: 'pw',
    image: 'imgs/flags/pw.svg',
    name: 'Palau',
  },
  {
    id: 'py',
    image: 'imgs/flags/py.svg',
    name: 'Paraguay',
  },
  {
    id: 'qa',
    image: 'imgs/flags/qa.svg',
    name: 'Qatar',
  },
  {
    id: 're',
    image: 'imgs/flags/re.svg',
    name: 'Réunion',
  },
  {
    id: 'ro',
    image: 'imgs/flags/ro.svg',
    name: 'Romania',
  },
  {
    id: 'rs',
    image: 'imgs/flags/rs.svg',
    name: 'Serbia',
  },
  {
    id: 'ru',
    image: 'imgs/flags/ru.svg',
    name: 'Russian Federation',
  },
  {
    id: 'rw',
    image: 'imgs/flags/rw.svg',
    name: 'Rwanda',
  },
  {
    id: 'sa',
    image: 'imgs/flags/sa.svg',
    name: 'Saudi Arabia',
  },
  {
    id: 'sb',
    image: 'imgs/flags/sb.svg',
    name: 'Solomon Islands',
  },
  {
    id: 'sc',
    image: 'imgs/flags/sc.svg',
    name: 'Seychelles',
  },
  {
    id: 'sd',
    image: 'imgs/flags/sd.svg',
    name: 'Sudan',
  },
  {
    id: 'se',
    image: 'imgs/flags/se.svg',
    name: 'Sweden',
  },
  {
    id: 'sg',
    image: 'imgs/flags/sg.svg',
    name: 'Singapore',
  },
  {
    id: 'sh',
    image: 'imgs/flags/sh.svg',
    name: 'Saint Helena',
  },
  {
    id: 'si',
    image: 'imgs/flags/si.svg',
    name: 'Slovenia',
  },
  {
    id: 'sj',
    image: 'imgs/flags/sj.svg',
    name: 'Svalbard And Jan Mayen',
  },
  {
    id: 'sk',
    image: 'imgs/flags/sk.svg',
    name: 'Slovakia',
  },
  {
    id: 'sl',
    image: 'imgs/flags/sl.svg',
    name: 'Sierra Leone',
  },
  {
    id: 'sm',
    image: 'imgs/flags/sm.svg',
    name: 'San Marino',
  },
  {
    id: 'sn',
    image: 'imgs/flags/sn.svg',
    name: 'Senegal',
  },
  {
    id: 'so',
    image: 'imgs/flags/so.svg',
    name: 'Somalia',
  },
  {
    id: 'sr',
    image: 'imgs/flags/sr.svg',
    name: 'Suriname',
  },
  {
    id: 'ss',
    image: 'imgs/flags/ss.svg',
    name: 'South Sudan',
  },
  {
    id: 'st',
    image: 'imgs/flags/st.svg',
    name: 'Sao Tome and Principe',
  },
  {
    id: 'sv',
    image: 'imgs/flags/sv.svg',
    name: 'El Salvador',
  },
  {
    id: 'sx',
    image: 'imgs/flags/sx.svg',
    name: 'Sint Maarten',
  },
  {
    id: 'sy',
    image: 'imgs/flags/sy.svg',
    name: 'Syrian Arab Republic',
  },
  {
    id: 'sz',
    image: 'imgs/flags/sz.svg',
    name: 'Swaziland',
  },
  {
    id: 'tc',
    image: 'imgs/flags/tc.svg',
    name: 'Turks and Caicos Islands',
  },
  {
    id: 'td',
    image: 'imgs/flags/td.svg',
    name: 'Chad',
  },
  {
    id: 'tf',
    image: 'imgs/flags/tf.svg',
    name: 'French Southern Territories',
  },
  {
    id: 'tg',
    image: 'imgs/flags/tg.svg',
    name: 'Togo',
  },
  {
    id: 'th',
    image: 'imgs/flags/th.svg',
    name: 'Thailand',
  },
  {
    id: 'tj',
    image: 'imgs/flags/tj.svg',
    name: 'Tajikistan',
  },
  {
    id: 'tk',
    image: 'imgs/flags/tk.svg',
    name: 'Tokelau',
  },
  {
    id: 'tl',
    image: 'imgs/flags/tl.svg',
    name: 'Timor-Leste',
  },
  {
    id: 'tm',
    image: 'imgs/flags/tm.svg',
    name: 'Turkmenistan',
  },
  {
    id: 'tn',
    image: 'imgs/flags/tn.svg',
    name: 'Tunisia',
  },
  {
    id: 'to',
    image: 'imgs/flags/to.svg',
    name: 'Tonga',
  },
  {
    id: 'tr',
    image: 'imgs/flags/tr.svg',
    name: 'Turkey',
  },
  {
    id: 'tt',
    image: 'imgs/flags/tt.svg',
    name: 'Trinidad and Tobago',
  },
  {
    id: 'tv',
    image: 'imgs/flags/tv.svg',
    name: 'Tuvalu',
  },
  {
    id: 'tw',
    image: 'imgs/flags/tw.svg',
    name: 'Taiwan, Republic Of China',
  },
  {
    id: 'tz',
    image: 'imgs/flags/tz.svg',
    name: 'Tanzania, United Republic of',
  },
  {
    id: 'ua',
    image: 'imgs/flags/ua.svg',
    name: 'Ukraine',
  },
  {
    id: 'ug',
    image: 'imgs/flags/ug.svg',
    name: 'Uganda',
  },
  {
    id: 'um',
    image: 'imgs/flags/um.svg',
    name: 'United States Minor Outlying Islands',
  },
  {
    id: 'us',
    image: 'imgs/flags/us.svg',
    name: 'United States',
  },
  {
    id: 'uy',
    image: 'imgs/flags/uy.svg',
    name: 'Uruguay',
  },
  {
    id: 'uz',
    image: 'imgs/flags/uz.svg',
    name: 'Uzbekistan',
  },
  {
    id: 'va',
    image: 'imgs/flags/va.svg',
    name: 'Holy See (Vatican City State)',
  },
  {
    id: 'vc',
    image: 'imgs/flags/vc.svg',
    name: 'Saint Vincent And The Grenadines',
  },
  {
    id: 've',
    image: 'imgs/flags/ve.svg',
    name: 'Venezuela, Bolivarian Republic of',
  },
  {
    id: 'vg',
    image: 'imgs/flags/vg.svg',
    name: 'Virgin Islands, British',
  },
  {
    id: 'vi',
    image: 'imgs/flags/vi.svg',
    name: 'Virgin Islands, U.S.',
  },
  {
    id: 'vn',
    image: 'imgs/flags/vn.svg',
    name: 'Vietnam',
  },
  {
    id: 'vu',
    image: 'imgs/flags/vu.svg',
    name: 'Vanuatu',
  },
  {
    id: 'wf',
    image: 'imgs/flags/wf.svg',
    name: 'Wallis and Futuna',
  },
  {
    id: 'ws',
    image: 'imgs/flags/ws.svg',
    name: 'Samoa',
  },
  {
    id: 'ye',
    image: 'imgs/flags/ye.svg',
    name: 'Yemen',
  },
  {
    id: 'yt',
    image: 'imgs/flags/yt.svg',
    name: 'Mayotte',
  },
  {
    id: 'za',
    image: 'imgs/flags/za.svg',
    name: 'South Africa',
  },
  {
    id: 'zm',
    image: 'imgs/flags/zm.svg',
    name: 'Zambia',
  },
  {
    id: 'zw',
    image: 'imgs/flags/zw.svg',
    name: 'Zimbabwe',
  },
];

export default flags;