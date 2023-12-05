# Education

```python
import pandas
import requests
```

## Get Universities

```python
url = "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json"

response = requests.get(url)
universities = response.json()
universities_data_frame = pandas.DataFrame(universities)
sorted_universities_data_frame = universities_data_frame.sort_values(by = ["country", "name"])
sorted_universities_data_frame.to_csv("./universites.csv", index=False, header=True)
sorted_universities_data_frame
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>domains</th>
      <th>web_pages</th>
      <th>country</th>
      <th>alpha_two_code</th>
      <th>state-province</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1263</th>
      <td>Afghan University</td>
      <td>[afghanuniversity.edu.af]</td>
      <td>[http://www.afghanuniversity.edu.af/]</td>
      <td>Afghanistan</td>
      <td>AF</td>
      <td>None</td>
    </tr>
    <tr>
      <th>1266</th>
      <td>Al-Birony University</td>
      <td>[au.edu.af]</td>
      <td>[http://www.au.edu.af/]</td>
      <td>Afghanistan</td>
      <td>AF</td>
      <td>None</td>
    </tr>
    <tr>
      <th>1265</th>
      <td>American University of Afghanistan</td>
      <td>[auaf.edu.af]</td>
      <td>[http://www.auaf.edu.af/]</td>
      <td>Afghanistan</td>
      <td>AF</td>
      <td>None</td>
    </tr>
    <tr>
      <th>1264</th>
      <td>Aria Institute of Higher Education</td>
      <td>[aria.edu.af]</td>
      <td>[http://www.aria.edu.af/]</td>
      <td>Afghanistan</td>
      <td>AF</td>
      <td>None</td>
    </tr>
    <tr>
      <th>1267</th>
      <td>Badakhshan University</td>
      <td>[badakhshan.edu.af]</td>
      <td>[http://www.badakhshan.edu.af/]</td>
      <td>Afghanistan</td>
      <td>AF</td>
      <td>None</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>8751</th>
      <td>Solusi University</td>
      <td>[solusi.ac.zw]</td>
      <td>[http://www.solusi.ac.zw/]</td>
      <td>Zimbabwe</td>
      <td>ZW</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8752</th>
      <td>University of Zimbabwe</td>
      <td>[uz.ac.zw]</td>
      <td>[http://www.uz.ac.zw/]</td>
      <td>Zimbabwe</td>
      <td>ZW</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8753</th>
      <td>Women's University in Africa</td>
      <td>[wua.ac.zw]</td>
      <td>[http://www.wua.ac.zw/]</td>
      <td>Zimbabwe</td>
      <td>ZW</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8754</th>
      <td>Zimbabwe Ezekiel Guti University</td>
      <td>[zegu.ac.zw]</td>
      <td>[http://www.zegu.ac.zw/]</td>
      <td>Zimbabwe</td>
      <td>ZW</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8755</th>
      <td>Zimbabwe Open University</td>
      <td>[zou.ac.zw]</td>
      <td>[http://www.zou.ac.zw/]</td>
      <td>Zimbabwe</td>
      <td>ZW</td>
      <td>None</td>
    </tr>
  </tbody>
</table>
<p>9987 rows × 6 columns</p>
</div>

## Get Countries

```python
countries = sorted_universities_data_frame['country'].unique()
countries_txt = open("./countries.txt", "w+")
countries_txt.write("\n".join(list(countries)))
countries
```

    array(['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
           'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia',
           'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh',
           'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda',
           'Bhutan', 'Bolivia, Plurinational State of',
           'Bosnia and Herzegovina', 'Botswana', 'Brazil',
           'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi',
           'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands',
           'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia',
           'Congo', 'Congo, the Democratic Republic of the', 'Costa Rica',
           'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', "Côte d'Ivoire",
           'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador',
           'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia',
           'Ethiopia', 'Faroe Islands', 'Fiji', 'Finland', 'France',
           'French Guiana', 'French Polynesia', 'Gabon', 'Gambia', 'Georgia',
           'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe',
           'Guam', 'Guatemala', 'Guinea', 'Guyana', 'Haiti',
           'Holy See (Vatican City State)', 'Honduras', 'Hong Kong',
           'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq',
           'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan',
           'Kazakhstan', 'Kenya', "Korea, Democratic People's Republic of",
           'Korea, Republic of', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
           "Lao People's Democratic Republic", 'Latvia', 'Lebanon', 'Lesotho',
           'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
           'Macao', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali',
           'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mexico',
           'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montenegro',
           'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
           'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand',
           'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'North Macedonia',
           'Norway', 'Oman', 'Pakistan', 'Palestine, State of', 'Panama',
           'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
           'Portugal', 'Puerto Rico', 'Qatar', 'Romania',
           'Russian Federation', 'Rwanda', 'Réunion', 'Saint Kitts and Nevis',
           'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa',
           'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
           'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia',
           'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan',
           'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden',
           'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan',
           'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tonga',
           'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
           'Turks and Caicos Islands', 'UK', 'Uganda', 'Ukraine',
           'United Arab Emirates', 'United Kingdom', 'United States',
           'Uruguay', 'Uzbekistan', 'Venezuela, Bolivarian Republic of',
           'Viet Nam', 'Virgin Islands, British', 'Yemen', 'Zambia',
           'Zimbabwe'], dtype=object)

## Get Universities by Countries

```python
universities_in_au_data_frame = sorted_universities_data_frame[sorted_universities_data_frame['country'] == "Australia"]
print(len(universities_in_au_data_frame.index))
universities_in_au_data_frame
```

    53

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>domains</th>
      <th>web_pages</th>
      <th>country</th>
      <th>alpha_two_code</th>
      <th>state-province</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1459</th>
      <td>Australian Catholic University</td>
      <td>[acu.edu.au]</td>
      <td>[http://www.acu.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1458</th>
      <td>Australian Correspondence Schools</td>
      <td>[acs.edu.au]</td>
      <td>[http://www.acs.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>None</td>
    </tr>
    <tr>
      <th>1461</th>
      <td>Australian Defence Force Academy</td>
      <td>[adfa.oz.au]</td>
      <td>[http://www.adfa.oz.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Australian Capital Territory</td>
    </tr>
    <tr>
      <th>1462</th>
      <td>Australian Lutheran College</td>
      <td>[alc.edu.au]</td>
      <td>[http://www.alc.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>South Australia</td>
    </tr>
    <tr>
      <th>1463</th>
      <td>Australian Maritime College</td>
      <td>[amc.edu.au]</td>
      <td>[http://www.amc.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Tasmania</td>
    </tr>
    <tr>
      <th>1464</th>
      <td>Australian National University</td>
      <td>[anu.edu.au]</td>
      <td>[http://www.anu.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Australian Capital Territory</td>
    </tr>
    <tr>
      <th>1465</th>
      <td>Avondale University</td>
      <td>[avondale.edu.au]</td>
      <td>[http://www.avondale.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1489</th>
      <td>Batchelor Institute of Indigenous Tertiary Edu...</td>
      <td>[nt.gov.au]</td>
      <td>[http://www.nt.gov.au/batc/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Northern Territory</td>
    </tr>
    <tr>
      <th>1478</th>
      <td>Blue Mountains Hotel School</td>
      <td>[hotelschool.com.au]</td>
      <td>[http://www.hotelschool.com.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1467</th>
      <td>Bond University</td>
      <td>[bond.edu.au]</td>
      <td>[http://www.bond.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Queensland</td>
    </tr>
    <tr>
      <th>9791</th>
      <td>Box Hill Institute</td>
      <td>[bhtafe.edu.au, boxhill.edu.au]</td>
      <td>[http://www.bhtafe.edu.au, http://www.boxhill....</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
    <tr>
      <th>1470</th>
      <td>Central Queensland University</td>
      <td>[cqu.edu.au]</td>
      <td>[http://www.cqu.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Queensland</td>
    </tr>
    <tr>
      <th>1469</th>
      <td>Charles Darwin University</td>
      <td>[cdu.edu.au]</td>
      <td>[http://www.cdu.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Northern Territory</td>
    </tr>
    <tr>
      <th>1471</th>
      <td>Charles Sturt University</td>
      <td>[csu.edu.au]</td>
      <td>[http://www.csu.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1472</th>
      <td>Curtin University of Technology</td>
      <td>[curtin.edu.au]</td>
      <td>[http://www.curtin.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Western Australia</td>
    </tr>
    <tr>
      <th>1473</th>
      <td>Deakin University</td>
      <td>[deakin.edu.au]</td>
      <td>[http://www.deakin.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
    <tr>
      <th>1474</th>
      <td>Edith Cowan University</td>
      <td>[ecu.edu.au]</td>
      <td>[http://www.ecu.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Western Australia</td>
    </tr>
    <tr>
      <th>1466</th>
      <td>Federation University Australia</td>
      <td>[federation.edu.au]</td>
      <td>[http://federation.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
    <tr>
      <th>1475</th>
      <td>Flinders University of South Australia</td>
      <td>[flinders.edu.au]</td>
      <td>[http://www.flinders.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>South Australia</td>
    </tr>
    <tr>
      <th>1476</th>
      <td>Griffith University</td>
      <td>[griffith.edu.au]</td>
      <td>[https://www.griffith.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Queensland</td>
    </tr>
    <tr>
      <th>1477</th>
      <td>Holmes Institute</td>
      <td>[holmes.edu.au]</td>
      <td>[http://www.holmes.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
    <tr>
      <th>1480</th>
      <td>Institute Of Technology, Australia</td>
      <td>[iota.edu.au]</td>
      <td>[http://www.iota.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>None</td>
    </tr>
    <tr>
      <th>1479</th>
      <td>International College of Tourism and Hotel Man...</td>
      <td>[icthm.edu.au]</td>
      <td>[http://www.icthm.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>None</td>
    </tr>
    <tr>
      <th>1481</th>
      <td>James Cook University of North Queensland</td>
      <td>[jcu.edu.au]</td>
      <td>[http://www.jcu.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Queensland</td>
    </tr>
    <tr>
      <th>1482</th>
      <td>La Trobe University</td>
      <td>[latrobe.edu.au]</td>
      <td>[http://www.latrobe.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
    <tr>
      <th>9792</th>
      <td>Linuwel School</td>
      <td>[linuwel.nsw.edu.au]</td>
      <td>[http://www.linuwel.nsw.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1485</th>
      <td>Macquarie University</td>
      <td>[mq.edu.au]</td>
      <td>[http://www.mq.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1483</th>
      <td>Marcus Oldham College</td>
      <td>[marcusoldham.vic.edu.au]</td>
      <td>[http://www.marcusoldham.vic.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
    <tr>
      <th>1484</th>
      <td>Monash University</td>
      <td>[monash.edu, monash.edu.au]</td>
      <td>[http://www.monash.edu/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
    <tr>
      <th>1486</th>
      <td>Murdoch University</td>
      <td>[murdoch.edu.au, student.murdoch.edu.au]</td>
      <td>[http://www.murdoch.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Western Australia</td>
    </tr>
    <tr>
      <th>1490</th>
      <td>Queensland University of Technology</td>
      <td>[qut.edu.au]</td>
      <td>[http://www.qut.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Queensland</td>
    </tr>
    <tr>
      <th>1491</th>
      <td>Royal Melbourne Institute of Technology</td>
      <td>[rmit.edu.au]</td>
      <td>[http://www.rmit.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
    <tr>
      <th>1492</th>
      <td>Southern Cross University</td>
      <td>[scu.edu.au]</td>
      <td>[http://www.scu.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1493</th>
      <td>Swinburne University of Technology</td>
      <td>[swin.edu.au]</td>
      <td>[http://www.swin.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
    <tr>
      <th>9780</th>
      <td>Torrens University Australia</td>
      <td>[torrens.edu.au, tua.edu.au]</td>
      <td>[https://www.torrens.edu.au]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>South Australia</td>
    </tr>
    <tr>
      <th>1460</th>
      <td>University of Adelaide</td>
      <td>[adelaide.edu.au]</td>
      <td>[http://www.adelaide.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>South Australia</td>
    </tr>
    <tr>
      <th>1468</th>
      <td>University of Canberra</td>
      <td>[canberra.edu.au]</td>
      <td>[http://www.canberra.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Australian Capital Territory</td>
    </tr>
    <tr>
      <th>1495</th>
      <td>University of Melbourne</td>
      <td>[unimelb.edu, unimelb.edu.au]</td>
      <td>[http://www.unimelb.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
    <tr>
      <th>1494</th>
      <td>University of New England</td>
      <td>[une.edu.au]</td>
      <td>[http://www.une.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1497</th>
      <td>University of New South Wales</td>
      <td>[unsw.edu.au]</td>
      <td>[http://www.unsw.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1488</th>
      <td>University of Newcastle</td>
      <td>[newcastle.edu.au]</td>
      <td>[http://www.newcastle.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1487</th>
      <td>University of Notre Dame Australia</td>
      <td>[nd.edu.au]</td>
      <td>[http://www.nd.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Western Australia</td>
    </tr>
    <tr>
      <th>1499</th>
      <td>University of Queensland</td>
      <td>[uq.edu.au]</td>
      <td>[http://www.uq.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Queensland</td>
    </tr>
    <tr>
      <th>1496</th>
      <td>University of South Australia</td>
      <td>[unisa.edu.au]</td>
      <td>[http://www.unisa.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>South Australia</td>
    </tr>
    <tr>
      <th>1501</th>
      <td>University of Southern Queensland</td>
      <td>[usq.edu.au]</td>
      <td>[http://www.usq.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Queensland</td>
    </tr>
    <tr>
      <th>1502</th>
      <td>University of Sydney</td>
      <td>[sydney.edu.au, usyd.edu.au, uni.sydney.edu.au]</td>
      <td>[http://sydney.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1503</th>
      <td>University of Tasmania</td>
      <td>[utas.edu.au]</td>
      <td>[http://www.utas.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Tasmania</td>
    </tr>
    <tr>
      <th>1504</th>
      <td>University of Technology Sydney</td>
      <td>[uts.edu.au, student.uts.edu.au]</td>
      <td>[http://www.uts.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1505</th>
      <td>University of Western Australia</td>
      <td>[uwa.edu.au]</td>
      <td>[http://www.uwa.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Western Australia</td>
    </tr>
    <tr>
      <th>1506</th>
      <td>University of Western Sydney</td>
      <td>[uws.edu.au]</td>
      <td>[http://www.uws.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1498</th>
      <td>University of Wollongong</td>
      <td>[uow.edu.au, uowmail.edu.au]</td>
      <td>[http://www.uow.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>New South Wales</td>
    </tr>
    <tr>
      <th>1500</th>
      <td>University of the Sunshine Coast</td>
      <td>[usc.edu.au]</td>
      <td>[http://www.usc.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Queensland</td>
    </tr>
    <tr>
      <th>1507</th>
      <td>Victoria University</td>
      <td>[vu.edu.au]</td>
      <td>[http://www.vu.edu.au/]</td>
      <td>Australia</td>
      <td>AU</td>
      <td>Victoria</td>
    </tr>
  </tbody>
</table>
</div>

```python
universities_in_uk_data_frame = sorted_universities_data_frame[sorted_universities_data_frame['country'] == "United Kingdom"]
print(len(universities_in_uk_data_frame.index))
universities_in_uk_data_frame
```

    184

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>domains</th>
      <th>web_pages</th>
      <th>country</th>
      <th>alpha_two_code</th>
      <th>state-province</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>8435</th>
      <td>Aga Khan University</td>
      <td>[aku.edu]</td>
      <td>[http://www.aku.edu/]</td>
      <td>United Kingdom</td>
      <td>GB</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8434</th>
      <td>American InterContinental University - London</td>
      <td>[aiuniv.edu]</td>
      <td>[http://www.aiuniv.edu/]</td>
      <td>United Kingdom</td>
      <td>GB</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8436</th>
      <td>Anglia Ruskin University</td>
      <td>[anglia.ac.uk]</td>
      <td>[http://www.anglia.ac.uk/]</td>
      <td>United Kingdom</td>
      <td>GB</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8437</th>
      <td>Aston University</td>
      <td>[aston.ac.uk]</td>
      <td>[http://www.aston.ac.uk/]</td>
      <td>United Kingdom</td>
      <td>GB</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8441</th>
      <td>Bath Spa University</td>
      <td>[bathspa.ac.uk]</td>
      <td>[https://www.bathspa.ac.uk/]</td>
      <td>United Kingdom</td>
      <td>GB</td>
      <td>None</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>8594</th>
      <td>Warnborough University</td>
      <td>[warnborough.edu]</td>
      <td>[http://www.warnborough.edu/]</td>
      <td>United Kingdom</td>
      <td>GB</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8597</th>
      <td>William Gilbert College</td>
      <td>[williamgilbert.co.uk]</td>
      <td>[http://www.williamgilbert.co.uk/]</td>
      <td>United Kingdom</td>
      <td>GB</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8598</th>
      <td>Wimbledon School of Art</td>
      <td>[wimbledon.ac.uk]</td>
      <td>[http://www.wimbledon.ac.uk/]</td>
      <td>United Kingdom</td>
      <td>GB</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8607</th>
      <td>York St. John University</td>
      <td>[yorksj.ac.uk]</td>
      <td>[https://www.yorksj.ac.uk/]</td>
      <td>United Kingdom</td>
      <td>GB</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8494</th>
      <td>ifs University College</td>
      <td>[ifslearning.ac.uk]</td>
      <td>[http://www.ifslearning.ac.uk/]</td>
      <td>United Kingdom</td>
      <td>GB</td>
      <td>None</td>
    </tr>
  </tbody>
</table>
<p>184 rows × 6 columns</p>
</div>

```python
universities_in_us_data_frame = sorted_universities_data_frame[sorted_universities_data_frame['country'] == "United States"]
print(len(universities_in_us_data_frame.index))
universities_in_us_data_frame
```

    2281

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>domains</th>
      <th>web_pages</th>
      <th>country</th>
      <th>alpha_two_code</th>
      <th>state-province</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>72</th>
      <td>42 US</td>
      <td>[student.42.us.org]</td>
      <td>[http://www.42.us.org/]</td>
      <td>United States</td>
      <td>US</td>
      <td>None</td>
    </tr>
    <tr>
      <th>9398</th>
      <td>ASA College</td>
      <td>[asa.edu]</td>
      <td>[http://www.asa.edu]</td>
      <td>United States</td>
      <td>US</td>
      <td>None</td>
    </tr>
    <tr>
      <th>9337</th>
      <td>Aaniiih Nakoda College</td>
      <td>[ancollege.edu]</td>
      <td>[http://www.ancollege.edu]</td>
      <td>United States</td>
      <td>US</td>
      <td>None</td>
    </tr>
    <tr>
      <th>135</th>
      <td>Abilene Christian University</td>
      <td>[acu.edu]</td>
      <td>[http://www.acu.edu/]</td>
      <td>United States</td>
      <td>US</td>
      <td>None</td>
    </tr>
    <tr>
      <th>885</th>
      <td>Academic medical center at State University of...</td>
      <td>[stonybrookmedicine.edu]</td>
      <td>[http://www.stonybrookmedicine.edu/]</td>
      <td>United States</td>
      <td>US</td>
      <td>None</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>63</th>
      <td>Yosemite Community College District</td>
      <td>[yosemite.edu]</td>
      <td>[https://www.yosemite.edu/]</td>
      <td>United States</td>
      <td>US</td>
      <td>None</td>
    </tr>
    <tr>
      <th>60</th>
      <td>Young Harris College</td>
      <td>[yhc.edu]</td>
      <td>[https://www.yhc.edu/]</td>
      <td>United States</td>
      <td>US</td>
      <td>None</td>
    </tr>
    <tr>
      <th>1262</th>
      <td>Youngstown State University</td>
      <td>[ysu.edu]</td>
      <td>[http://www.ysu.edu/]</td>
      <td>United States</td>
      <td>US</td>
      <td>None</td>
    </tr>
    <tr>
      <th>9022</th>
      <td>Yuba College</td>
      <td>[yc.yccd.edu]</td>
      <td>[http://yc.yccd.edu]</td>
      <td>United States</td>
      <td>US</td>
      <td>None</td>
    </tr>
    <tr>
      <th>9528</th>
      <td>Zane State College</td>
      <td>[zanestate.edu]</td>
      <td>[http://www.zanestate.edu]</td>
      <td>United States</td>
      <td>US</td>
      <td>None</td>
    </tr>
  </tbody>
</table>
<p>2281 rows × 6 columns</p>
</div>

```python
universities_in_sq_data_frame = sorted_universities_data_frame[sorted_universities_data_frame['country'] == "Singapore"]
print(len(universities_in_sq_data_frame.index))
universities_in_sq_data_frame
```

    8

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>domains</th>
      <th>web_pages</th>
      <th>country</th>
      <th>alpha_two_code</th>
      <th>state-province</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>7646</th>
      <td>Aventis School of Management</td>
      <td>[aventis.edu.sg]</td>
      <td>[http://www.aventis.edu.sg/]</td>
      <td>Singapore</td>
      <td>SG</td>
      <td>None</td>
    </tr>
    <tr>
      <th>7647</th>
      <td>Nanyang Technological University</td>
      <td>[ntu.edu.sg]</td>
      <td>[http://www.ntu.edu.sg/]</td>
      <td>Singapore</td>
      <td>SG</td>
      <td>None</td>
    </tr>
    <tr>
      <th>7648</th>
      <td>National University of Singapore</td>
      <td>[nus.edu, nus.edu.sg]</td>
      <td>[http://www.nus.edu/, http://www.nus.edu.sg/]</td>
      <td>Singapore</td>
      <td>SG</td>
      <td>None</td>
    </tr>
    <tr>
      <th>7650</th>
      <td>Singapore Institute of Management (SIM)</td>
      <td>[sim.edu.sg]</td>
      <td>[http://www.sim.edu.sg/]</td>
      <td>Singapore</td>
      <td>SG</td>
      <td>None</td>
    </tr>
    <tr>
      <th>7651</th>
      <td>Singapore Management University</td>
      <td>[smu.edu.sg]</td>
      <td>[http://www.smu.edu.sg/]</td>
      <td>Singapore</td>
      <td>SG</td>
      <td>None</td>
    </tr>
    <tr>
      <th>7652</th>
      <td>Taoist College Singapore</td>
      <td>[taoistcollege.org.sg]</td>
      <td>[http://www.taoistcollege.org.sg/]</td>
      <td>Singapore</td>
      <td>SG</td>
      <td>None</td>
    </tr>
    <tr>
      <th>7653</th>
      <td>Temasek Polytechnic</td>
      <td>[tp.edu.sg]</td>
      <td>[http://www.tp.edu.sg/]</td>
      <td>Singapore</td>
      <td>SG</td>
      <td>None</td>
    </tr>
    <tr>
      <th>7649</th>
      <td>yale-NUS</td>
      <td>[yale-nus.edu.sg]</td>
      <td>[http://www.yale-nus.edu.sg/]</td>
      <td>Singapore</td>
      <td>SG</td>
      <td>None</td>
    </tr>
  </tbody>
</table>
</div>

```python
universities_in_nz_data_frame = sorted_universities_data_frame[sorted_universities_data_frame['country'] == "New Zealand"]
print(len(universities_in_nz_data_frame.index))
universities_in_nz_data_frame
```

    11

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>domains</th>
      <th>web_pages</th>
      <th>country</th>
      <th>alpha_two_code</th>
      <th>state-province</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>6392</th>
      <td>Auckland University of Technology</td>
      <td>[aut.ac.nz]</td>
      <td>[http://www.aut.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Auckland</td>
    </tr>
    <tr>
      <th>6394</th>
      <td>Christchurch Polytechnic Institute of Technology</td>
      <td>[cpit.ac.nz]</td>
      <td>[http://www.cpit.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Canterbury</td>
    </tr>
    <tr>
      <th>6395</th>
      <td>Lincoln University</td>
      <td>[lincoln.ac.nz]</td>
      <td>[http://www.lincoln.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Canterbury</td>
    </tr>
    <tr>
      <th>6396</th>
      <td>Massey University</td>
      <td>[massey.ac.nz]</td>
      <td>[http://www.massey.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Wellington</td>
    </tr>
    <tr>
      <th>6401</th>
      <td>Nelson Marlborough Institute of Technology</td>
      <td>[nmit.ac.nz]</td>
      <td>[https://www.nmit.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Nelson</td>
    </tr>
    <tr>
      <th>6397</th>
      <td>Open Polytechnic</td>
      <td>[openpolytechnic.ac.nz]</td>
      <td>[http://www.openpolytechnic.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Wellington</td>
    </tr>
    <tr>
      <th>6391</th>
      <td>University of Auckland</td>
      <td>[auckland.ac.nz, aucklanduni.ac.nz]</td>
      <td>[http://www.auckland.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Auckland</td>
    </tr>
    <tr>
      <th>6393</th>
      <td>University of Canterbury</td>
      <td>[canterbury.ac.nz]</td>
      <td>[http://www.canterbury.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Canterbury</td>
    </tr>
    <tr>
      <th>6398</th>
      <td>University of Otago</td>
      <td>[otago.ac.nz]</td>
      <td>[http://www.otago.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Otago</td>
    </tr>
    <tr>
      <th>6400</th>
      <td>University of Waikato</td>
      <td>[waikato.ac.nz]</td>
      <td>[http://www.waikato.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Waikato</td>
    </tr>
    <tr>
      <th>6399</th>
      <td>Victoria University of Wellington</td>
      <td>[vuw.ac.nz]</td>
      <td>[http://www.vuw.ac.nz/]</td>
      <td>New Zealand</td>
      <td>NZ</td>
      <td>Wellington</td>
    </tr>
  </tbody>
</table>
</div>

```python
universities_in_vn_data_frame = sorted_universities_data_frame[sorted_universities_data_frame['country'] == "Viet Nam"]
print(len(universities_in_vn_data_frame.index))
universities_in_vn_data_frame
```

    48

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>name</th>
      <th>domains</th>
      <th>web_pages</th>
      <th>country</th>
      <th>alpha_two_code</th>
      <th>state-province</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>8675</th>
      <td>Banking University of Ho Chi Minh City</td>
      <td>[buh.edu.vn]</td>
      <td>[http://www.buh.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8674</th>
      <td>Binh Duong University</td>
      <td>[bdu.edu.vn]</td>
      <td>[http://www.bdu.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8676</th>
      <td>Can-Tho University</td>
      <td>[ctu.edu.vn]</td>
      <td>[http://www.ctu.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8677</th>
      <td>Danang College Of Technology</td>
      <td>[dct.udn.vn]</td>
      <td>[http://www.dct.udn.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8680</th>
      <td>FPT University</td>
      <td>[fpt.edu.vn]</td>
      <td>[http://www.fpt.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8681</th>
      <td>Foreign Trade University</td>
      <td>[ftu.edu.vn]</td>
      <td>[http://www.ftu.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8703</th>
      <td>Hai Duong University of  Economics and Technology</td>
      <td>[ktkt-haiduong.edu.vn]</td>
      <td>[http://www.ktkt-haiduong.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8692</th>
      <td>Hanoi Medical University</td>
      <td>[hmu.edu.vn]</td>
      <td>[http://www.hmu.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8704</th>
      <td>Hanoi National Economics University</td>
      <td>[neu.edu.vn]</td>
      <td>[http://www.neu.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8693</th>
      <td>Hanoi Open University</td>
      <td>[hou.edu.vn]</td>
      <td>[http://www.hou.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8711</th>
      <td>Hanoi Univerisity of Transportation</td>
      <td>[uct.edu.vn]</td>
      <td>[http://www.uct.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8694</th>
      <td>Hanoi University of Agriculture</td>
      <td>[hua.edu.vn]</td>
      <td>[http://www.hua.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8682</th>
      <td>Hanoi University of Architecture</td>
      <td>[hau.edu.vn]</td>
      <td>[http://www.hau.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8678</th>
      <td>Hanoi University of Civil Engineering</td>
      <td>[dhxd.edu.vn]</td>
      <td>[http://www.dhxd.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8698</th>
      <td>Hanoi University of Mining and Geology</td>
      <td>[humg.edu.vn]</td>
      <td>[http://www.humg.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8699</th>
      <td>Hanoi University of Science</td>
      <td>[hus.edu.vn]</td>
      <td>[http://www.hus.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>9790</th>
      <td>Hanoi University of Science and Technology</td>
      <td>[hust.edu.vn]</td>
      <td>[http://hust.edu.vn]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8700</th>
      <td>Hanoi University of Technology</td>
      <td>[hut.edu.vn]</td>
      <td>[http://www.hut.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8705</th>
      <td>Ho Chi Minh City Open University</td>
      <td>[ou.edu.vn]</td>
      <td>[http://www.ou.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8683</th>
      <td>Ho Chi Minh City University of Agriculture and...</td>
      <td>[hcmuaf.edu.vn]</td>
      <td>[http://www.hcmuaf.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8684</th>
      <td>Ho Chi Minh City University of Architecture</td>
      <td>[hcmuarc.edu.vn]</td>
      <td>[http://www.hcmuarc.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8713</th>
      <td>Ho Chi Minh City University of Economics</td>
      <td>[ueh.edu.vn]</td>
      <td>[http://www.ueh.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8697</th>
      <td>Ho Chi Minh City University of Foreign Languag...</td>
      <td>[huflit.vnn.vn]</td>
      <td>[http://www.huflit.vnn.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8685</th>
      <td>Ho Chi Minh City University of Law</td>
      <td>[hcmulaw.edu.vn]</td>
      <td>[http://www.hcmulaw.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8717</th>
      <td>Ho Chi Minh City University of Medicine and Ph...</td>
      <td>[yds.edu.vn]</td>
      <td>[http://www.yds.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8686</th>
      <td>Ho Chi Minh City University of Natural Sciences</td>
      <td>[hcmuns.edu.vn]</td>
      <td>[http://www.hcmuns.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8687</th>
      <td>Ho Chi Minh City University of Pedagogics</td>
      <td>[hcmupeda.edu.vn]</td>
      <td>[http://www.hcmupeda.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8688</th>
      <td>Ho Chi Minh City University of Social Sciences...</td>
      <td>[hcmussh.edu.vn]</td>
      <td>[http://www.hcmussh.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8689</th>
      <td>Ho Chi Minh City University of Technology</td>
      <td>[hcmut.edu.vn]</td>
      <td>[http://www.hcmut.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8691</th>
      <td>Ho Chi Minh City University of Transport</td>
      <td>[hcmutrans.edu.vn]</td>
      <td>[http://www.hcmutrans.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8696</th>
      <td>Hue University</td>
      <td>[hueuni.edu.vn]</td>
      <td>[http://www.hueuni.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8695</th>
      <td>Hue University of Agriculture and Forestry</td>
      <td>[huaf.edu.vn]</td>
      <td>[http://www.huaf.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8701</th>
      <td>Institute of Finance</td>
      <td>[hvtc.edu.vn]</td>
      <td>[http://www.hvtc.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8718</th>
      <td>Pham Ngoc Thach University of Medicine</td>
      <td>[pnt.edu.vn]</td>
      <td>[http://www.pnt.edu.vn]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8706</th>
      <td>Posts &amp; Telecommunications Institute of Techno...</td>
      <td>[ptit.edu.vn]</td>
      <td>[http://www.ptit.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8707</th>
      <td>RMIT International University Vietnam</td>
      <td>[rmit.edu.vn]</td>
      <td>[http://www.rmit.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8708</th>
      <td>Saigon University</td>
      <td>[sgu.edu.vn]</td>
      <td>[http://www.sgu.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8709</th>
      <td>Tay Nguyen University</td>
      <td>[taynguyenuni.edu.vn]</td>
      <td>[http://www.taynguyenuni.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8710</th>
      <td>Thai Nguyen University of Agriculture and Fore...</td>
      <td>[tuaf.edu.vn]</td>
      <td>[http://www.tuaf.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8679</th>
      <td>University of Da Lat</td>
      <td>[dlu.edu.vn]</td>
      <td>[http://www.dlu.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8712</th>
      <td>University of Da Nang</td>
      <td>[ud.edu.vn]</td>
      <td>[http://www.ud.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8690</th>
      <td>University of Technical Education Ho Chi Minh ...</td>
      <td>[hcmute.edu.vn]</td>
      <td>[http://www.hcmute.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>9838</th>
      <td>VNU University of Engineering and Technology</td>
      <td>[uet.vnu.edu.vn]</td>
      <td>[https://uet.vnu.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8714</th>
      <td>Vietnam Maritime University</td>
      <td>[vimaru.edu.vn]</td>
      <td>[http://www.vimaru.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8715</th>
      <td>Vietnam National University Hanoi</td>
      <td>[vnu.edu.vn]</td>
      <td>[http://www.vnu.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8716</th>
      <td>Vietnam National University Ho Chi Minh City</td>
      <td>[vnuhcm.edu.vn]</td>
      <td>[http://www.vnuhcm.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8719</th>
      <td>Vietnamese - German University</td>
      <td>[vgu.edu.vn]</td>
      <td>[http://www.vgu.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
    <tr>
      <th>8702</th>
      <td>Water Resources University</td>
      <td>[hwru.edu.vn]</td>
      <td>[http://www.hwru.edu.vn/]</td>
      <td>Viet Nam</td>
      <td>VN</td>
      <td>None</td>
    </tr>
  </tbody>
</table>
</div>
