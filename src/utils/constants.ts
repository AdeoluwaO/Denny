import {Birthday, Contact, EmailAddress, InstantMessageAddress, PhoneNumber, PostalAddress, UrlAddress} from 'react-native-contacts';

/**FOR DEVELOPMENT PURPOSES */
export const defaultImage =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAkwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgMEBwABAv/EAD0QAAIBAwMCBAQDBAkEAwAAAAECAwQFEQASITFBBhNRYRQicYEyQpEVI7HwBxYkUmJyocHRM5Lh8TSisv/EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAUBAAb/xAAtEQABBAECBAQHAAMAAAAAAAABAAIDEQQSIRMxQVEFInHwFGGRobHR8UKBwf/aAAwDAQACEQMRAD8AdvEkTT0+Wpj0O9yedpUgkfTr9hrObZeZbNdUklD1CQzFZEQAsw5Uhff/AH0zeNPEzWq0Sx1U0bS1CFFRGByOhx9s8+pHvrPrJ4gmtsklyWKCSrKtskkGRE5/OB0yMnSmDy7p1qSq8JRWK61iymOukSU+SrjKxqRkF1PV8HoeB78Ym8i5VjGSeKqnJPVznTytoM6lmfEssjNvfkk7j1+3GrrU8oenp4IfMZ8Auxwo+uvlcjxImQtAveltRxNA5+qz5LpX2UBjDN5SOFaEjen3Xt9sHTBcaxp7LL8MqqtTA6Z27iDgZBO4Y6g8KfXjoGea0yeRJ54R5N2JNoA7dv8Ak6BXCBbbbajCLtkdcI/TOSP5+mn4PiGuZsbhVpGRC1zSQeSEeFq2D9hUdHDSiOCbY0s0kYaMTDG7POe3tg4P1JeJam2z10q3C4PLRgbkmp2YOG/NGNowcbV7dG9uVy33s2mKooGTzqGpm3T7nwqDA49hnJOOOSOM6bLpX0tfTmKmloDTQMEkXcjOoBGw4zxyGXbjqONUzROZIbukET7bTTuhlKpg3RRwsocOSgYsShOQDk4J5+nbOvu21gEtf58gVE8vy1Oedq57dc5/1++qvieegNAIQy09wEihqVE8tcZBIKrzgAcEkZ7YzkdTMljsMl0lXM0rEwqOo/y57kjAPYAn01TgREEylDmSt06AnOuW109jShgLLVkBppI16N3LEkc6ELBSyBVxI59DUAn/APOluio5rxb3qb9PNBCrLLHSRxN+AcknH+mee/TQq52qjp2phbIycln37yNq5J5HXcFUDjsT073HIF0o9LnUtWtFfSUMS05jkphk/McFTn1bGf1GjMlWcAmSKGLp9fvrFrb4hrLSkArIJ56V8iRuWDejL6cDpnn76PeKbNTXyyRXCkU1BgTzYADjzE6tH98HHofqdGDrGyURRoot4xq4Z5YY9ysIxy4GS2c8deOnt9ONT+FfKFnuhLBmRBglc7VGWPy/bP2GgNfR+H6uno5/Df8AZ5qiAyQxRJ8koAO5R2DjB6d+vUHVbw/fEstYhLEQSqPNZuQp6gn25P66jEwmiNDft1VDWVsiVddvhvD9VLKyGohmZpPNj3jAYgFl4yTgcZ5zqtBUUFZ4fuUcKJ8KELssUjMp3DcvDDcmf7uSAMYJGvPFVIYaepJD1NDWAyCU5bycL0PUEnnkj069NKXh29PT1FxSKkSSocKvlRqxAIIVRtAzgDsM8D21ksxiWHTzu/wrA8NLQ7sQUwWSee0WqmoqiskpZFXf5GyQ+UHO8L9gwGu0ArLtXGql33Kk3bufPc7/AL4BAPt212nHCkedRHP32QNyKaBf2Sq01Vcas1NbM8z/AN5jwo9AOgHsNbl4R8PeHlsFNJJDTVDSwh3lkjEhYkcjnOAORjWTpY/IREkmkDk9UGBn2J5P6DRiKx3W0U0wirbrRQmQI/79VUMf8OBj6/TnWv8AGQg1aUMSZu5FfRalRVVFXLU0cMkTTQN+BudueVyP5/01JTvLLTmOpj2FSRz1HPt/71hwiuvhisa5U9Y5Zz/1wOWPUhwc8/r7Hjhut/jh7kI47lQwitO1Wnjcxnb3H/jOD7DXz+d4UZHGSA7OVMc+nySCiFpquygcy/MMEtnke5Os28d3B5a6Gz0k71LibzpiORHnhV4+ui7VNyrLZJPaoldHTdERJl39B85AX9QR/rpb8OSSzx1omgkpKinZ4Zqghg8e7AbD9QeO/r7694Z4eYpTI9wJHS/yhmyGVpHVTxWvzLdP8MgeVZCm4/P5jAZIXbknB446Y9tL6NT1e2M0qfGLkTo9MpkVgMnIK54wf000UPiW3W2ueOUyQUaUhpop1XJR9xYvwCcNkA+6jS7QVNFU3OvromLw+YiF0BU/g4OD1BKt763jI9gJI5JMUTJXtYDzVGcXKKV2EEbxIDlt4cgZx0B4GfbHOtC8VWmoersNJEskdNTSRl5UUEKylQufsD+p0DrprdLDGCYxKzFW3ICVGOeSOONNPiS4TS0tpuUZZqCppw0iqoOx8qQenXkj/nS2ZJfEXuFUu5uIMeRrQ7YqfxDTz2eKatrJj5dU4aQqRnB4wBjqBxgZH20DutwpKSiit9BThKuoQCOWTCtIhzjywRg5+wz1Or9S/wC172Ia0sURCI42T83PB7ZPDe4519XivMtFTTuEhqaPfTVLyIVOxl4KPjg7gvH+L76U55BsNSrIbugM0XwdPWGaVBBTgRRqr/KZCuNrLkj82cHPb20d/o+kaS31FC5AanbKKuMHhckfqP8Au0Ao7MZpaOGrk+CpkV1ggVDiZ8geYxPBHJzkkntzp+8G2wUFNUJMi4py6fEFgd+47ieOnG3PuCO3LoJBrACVJRZYWNRXa5+D/EtfT2t1FMlY+KeRd0eAxAwOxxxkY0xiyXC/U71ECko2XbB2xpkk7cngY9zoz4a8N0fiG8Vl1r0DUr1DyKjcb8ndg+wGCf8A3qzeLfXeK4YpqWopYLMisYKbJ6AHb8gGCW+U57dB7k7SHlzRuUbRtulSK2+K7VB5dmu1NIo5+HirIpD9g3H6aUrxd/EVU8tHdKqtymRJTsCmB7qAOPrrXGs1uk8J/HXCkqIn+GRxUmpOdxAAwMgDnHA15ZbdVtaaqC/QYRoWUTuQTJT4PVu+AT9Dz35TxRG4FzRZROFigViCQvtGBxj012iEhp6OR6eaVnaNiN0bDawzwR7EYOu1faTpWoUvm3mmlavhEsMKYhl+F8k8vgbOM4ODkdONXnpXndahmmju1KwjWdn2pyMDcmfmHUnjn10Ppa6sNLLRTGdbjIdyPIPwgjcoUH8uV4/zD7EppPMkiuPnhYfK8ljF8rbS2QcnnHzAdeOOnfMbDEN2jb9rTLnHYpVvjNXOd0UcMdfTEYhwB56gnKj145+3PXWZxnfUIamSRUYgO6jLBT1OO+thutX8StPJ8N8PTW6F533ptbGM4B9+D+ulD9kU1Na1qKmnEgpkDuGBVnOWA5Hr8vHOPbrr2JPVt09eXP30UmZ/ifde7TNQ+JU8IWpLfURpXTbDJTPGwCvGxyC3devoSceupo6+ppwlZSUplutyHn1cLDy41G0bSu7j5QAR3POfZGslNLcq55ZlEgYMZ5im4RjHHGfbAz2H6tctVDHIbq6fESJIfhqVYTkEjaW45zzyOccdT0qyMIRNtm7juf0ogHyt1DkoJPCktTVj9m3WY0skjfJUL5uMYLkkADvwoBP+1C7+H6y0VJBieAEALOoBinXPQjoDweO3oeunLwtKklyWSptr06wo5DiPYMfNkEAnd8xIz6+g01SU9tu0MCeWkyzxCWOWXa7BuwAIz3/07Y0mLJeBT91RHEQATsVgU7VlbUmnEgRCWVkii5Iz045PQHGtH8C3WhFvPh+71atC0maWo+ZfJdhkDLAYP4j7E+40qkUVI8Px8DtH5JkJQ/NkE5x9ODjryfUajudZTwVQQbp48ExEMHR1J44yR079eOnOqCdw0DZelcdbg7c91qK2+Wxw03xfnulMrsRu3NtBzkEDLgcehIOOvGgldX01U0S09Uszyz+eVYE5YYIXYcnjavb8udB7T45qLbbGWoc19CgI8qohMihsnKg9gOnPHHHXVVf6R7GzsZPCMJZuNxqiRj6beNc+H6grjZnCr3TnaqWsukrLTuzNsMYZ25jQ5+du47YAwcjPA6yeNbjHY/DpsVqdXqXAFU69Qp4bA9T0x2Gk+6f0k3KSnEFCkFro8cCmGHI+vb6gDS3S+IKtDIFuk0ijLyQgOxx3OcYH8NMZGGb9UBJeVo/gGrha1PT+eJMCSM88gnnH/bjRjw5b8WDdNNONjOVpaVRhPmPygnJPT+eNY/S3gUVwFVZq0K7EF4ZAQknp176e7H4ktV4BjNWaSq2lPh2n2ANk+n4ue/XHUdzPO1zDrAtPY4VSO/1Xqq+gSVyIKRvmSiLuzJ1yWJ/N06dOcE6vmZKGjr3nk82GOBpOFwqR4JJPqTg4z7c6DzVlVRfDme40tPQ0ybPMaYIGUeoOT7cZ6e+lzxJ4nkv8Elv8P007UBZTVVaxFVqCvRFJ6Accd/QDrBwuLK0tFDra8QUmyWulnbzGnjBIHBPoMa7TPBQxiFA1vbOPTH++vdbGr5rmk9la8U2y50cInmqDWJGjLTVNOxLAHlcrnlQR15xqr4bmejvVFVXFKxqaLcMohky7DuB+XJ4AycjP0UrH4hrLcphpKlooMnjAKrnnO05Gf10cj8SX66yR0VtkZ5AcMsUABx6ljwPrxrPkxpKMba0m/uqhkxu8xu/kmLxjL8RFPSUUa/FV2BKevlRDgD6kdvc+2qfiOCOk/o+pV2fvRUL5jY27iAwyfqAOnsdfdp8M19dVsKi+Wunqn5dTU+dOfqAeP1OrvivwncqXw/URmvWrhi/flCpV8gckDvwPbTsSCOHQwG6KlyXulJcRSEWtbdLQVItkNYqvBHHKyuoLyOuGTjg9cHgcjOedFrRa2qJ0jrJyM0wCheGUclSDjr8xGO2ffXngC4I8K0SyRCpCnam0DABOeRye3P099H7vQ74UqhTB54cr5ahfnHAwC3X+RpGZnvbOYXCh3/C0MeBroQ5vNVo2rqSmkhkeRZ6eLAYkGOYrxuzkdsHJOOvBzzLZ4XoLwtNFNH5Qh+ZzLsYuzZVcgY5YlckD8bew0KijanrEhho9pqHKQxiQkxhtx9Qv/jHXGiF1SWz22mtVLJHNcLlVMaiWQgBto24ye5YjH30nUL9VNO7QKPNJviKnk+GSoWmdRFWSU7sRny1PZuSByPT15PZbttGklzgo5g7QZaQw+pClio+u3H30weKfNp9kMkpYmYK5YdXB3biffI4x39tfVbVipo4ayCnigrY0MhEQB2EH5WHp0yM61InU0A9bU0gLnud6JGkvdzecTCtmjK/gWNyqIPQKOAPbRVrNJdLnD8NGIlmpFqpwowqfKS2B2BxkD31JTVdoqpDVVdniFSTk7Z2WFm9THjp7BsaIRXBmSsYLunqTFuKJnCk8ALjgH93jr+HGNOkdpbslMbZ3V+2WTw+9L5stdVpWLGRH5e1kDEED+evvr5o6WGOIpVrHLwImercPuyTtJ6AgMCByT6dgWm2+EZ2oonu9wemAjG+KEBiOvLO3AOMDCjjHU6o3a3UL/urUlxuEEDMlS5gDIFI+YAqAWPTpuxj7ayJyXDcrTxnNYaS/drLawuaqkamkJz/ZflAHTLFsrj9On10vXq0z0tQY5FaWNiEhqTg7mxyjEd85HPP20808Cq0YqMVEQAEc3y88gqDns4IH1BI66CX0UtFBcqxJXFVVIkTxspUbyOSPfAz3x2POgxcl4eG3f9+ypysdjmagK9/dAfCVqp66oqay4LmioY/MlTOPMP5Vz2ydXbpdK2unYQzGKFVxHDAdiRr2AA7Y1NZD5c1wtlUpjap8qUpJlSTwSD6dRohSW6SMbGeNI9rYMoztIHQcE60DfEc4+g+n7WbsI2gcjz+qA04kMK76utDdwrcfx12r37HqW+ZVJB+uvdGWm+aVfyQmzWiG4MUaqCuQQIwDlT2J45H01okFt/q1QQikliqKeNM1MSxndUuQAXLdMDOAPr30Co5PDFsVkpWq3qZJFK1TMu103ZwABxkeudGbhXxR0Mi09yXc5DCJo1LY5wBjAzx6d9S5Mj3OoHYquGNoF1uF7/WWgrZTWxiKOogULKnl7XkG7o3rx6ccddMcdW9RBTbfPNBUJgSOrNh25BBPRecemSOw5VamloYLE9LItK4eHzTKTtd5COOhHU+2rn7YDi3UfwU9PVySpGkZjK7MYzwfygZPsBoQNI8gXHE76lBbLXVWu6t5rfCI74jGBhyOwP8AdPHH0HbTf8fJFAPPyJthOV/CSPTPB0C8ZvFcrxR2hanydjGaUqwHTAAP1+Y/bVKS9VVVdWpLBA0sbfKtO/zqSCctuzwuMcdvbTZ8eLM3k2d3/aGCV8GzaLexTHHc54IIjSvSio8v96XIJjAUse/cKffnQHxJ4heBqeKgqGM1OpkmnHZ3yZBnjJBIGR7rxjOhfic3mKmMkFBBOseTK9PUK7J2OQCTjr7aG261TXWziuSpSnYqSgmTeAB6kYx9cE67FhY+P5nusKXKllnfypST10ElvhqLwHqS4+dpOZCTuG769P10Kt93ht9HJTtTVUmcpJIQAR7c9OPXVOhhqLpKKiSXetMy7VyATyM+/oeP9tM09toWFfUw3AOszbaWPy8P5h/EGXocfmPqNNfK2NxATms1BtpFmp8TyHG7YTuQ9R9R/wAaKeH6yvp7pTy21DIPJQzAR7toXPPIIB4ODq9d7Qat4v2ZRPFNhRhhtJO7bkk9SSentwMA6o2S6zWqVZEeVKabHmLG23DdCM/Q5xoy8yRHSN+yXMwxOoev9T7RR1fjCzTSLUuZhuSeld9zKrfgYdl79s5GNGLNXjw7ao6O8pJBPTqQzrEzJIM53bgMD33Y5z1HOlq01s1qu0VbTxmGVlJqFI/6seAckDgk+o4Oc+2m68eKLTcvDkprbdKwkjY+VUr8iMPV1zjHtzx7HWTNjslbodytVx5JIBI3SqlygleKSaF44rjUSsIm/Iqy7/Tpg/bJOdBvGcEsNGd8sRVJd6vIfmLDflBxyQGX750TnqqSNY54mSbLNFRwI43PJkIT3wNgHI7HpnQOptV0uN4Sa7BKeAoTub51jjXAOB1xkge5ONFiwPfLxaob3637CpypmMj4V2f+IXHV1rvBSU9GlTPHEoCiAvL+EZwRzx01pPhCS5yLi7Wipp5TyXYHy2OMZYKQwPqMEH6caD/GLQ25YrQYKaCobaVZ9tTKSQC7kc7snoPXjQyoFxir333FjHApxKpUErgnoDk5Ixz1xq5+RC812We2B9ebktcatoIj5bQplQAdtNV4/wDqoH6a7WTJeLoBhK6vKgkKSp5GevI767XNcXUfhc4KU/Kp9v8A02Y88A450weH6y1CaE3qSaKSHHlSAbo5AOgfHIPv7c46kN1Qk88j+B1WnJ2p9NUuaHiilBxZuE6VApKiugrKZaV4I2LMzVUMeDjHA3ZOPfH21arPEtHRuqW0pNVRLtjkQEpE2Pmf0LHpxkY79tZ8vbViIkKTk59dC2Bo5ojMSKRmKqeR3meQmR2Jdm5Zjph8AIalL1Qed5FbPTqIZCfy5O77fhzpMiYnGST+HV2OaWDZLDI8ciuCroxBH3035IAaNhNlttlZabg9fXsaeCFCznAwyjORx64X00tRXyjShmTzxG07PI0SxNiMuSSo4A4zjRbxnUzt8HG08pRiCylzgn3Gkm6ACbgAfTSxC0DSmTzumOpyN2Np4Y5Iyx2QyAwsCv7uTnn5u3f9eD00YFfSxg1FdI8tfVbJBJDy0UofgYxhScD3I7jJOlJFV2pN4DZVAcjOeBo/BFGtjqZFjUSYpfmC8/gU9frzpGS0Ndv1TIzqY0/6ROqulelDUTpQzU88RaZqqWPEqvlWUuOBnsM56EYznS9YpJTTTPKQ4kkJYMo6nGTojfKieOquaRzSIslLTB1VyA4LDIProZSf/FTTcdoEd90lzzfom/w49VLYa+qklpY4KCcpTCohLLCuQGwVIYDnPXH01JX+H7tW3Ra/xDPSy0MMX7hKbasCduVcHnn0JzjVn+jokrcIzyjYJU9Dwe32Gg1Wzbmi3Hy0lkCJnhcMRwO2lBxE1BUGNvC1HsqF08aRUVTMlmtiQzgeWZ6jDkYPVVAwCcDnvgZHGp7Jvk8OrXV80jyXGsw8xfkJGPlXJ/xEkD1A0m33i71WP7w/gNaL4IRJLJYlkRXX+1cMMj8a6dlv0wOcpoG6pQFZt9LFJFvppYVBiDiWVgrS7SRtGOo5GMevryB39ho7i1HuieGXIgaUZ8vPJX/N0P1J6c6mBIv+4HDLVjB7jt/DTIaOlmsrGamhkOxzl4weh418+9/Donqttra27oJ/WKkos0z1VBEYzt2yOQ31ICHr1699doDDS08ke+SnidiTyyAnrrtV/DxdbSHag41S/9k=';

export class AppConstants {
  static radioButtonValues = [
    {
      title: 'All',
      value: 'transactions'
    },
    {
      title: 'Airtime',
      value: 'airtime'
    },
    {
      title: 'Data',
      value: 'data'
    },
    //COMING SOON
    // {
    //   title: 'Cable TV',
    //   value: 'cable'
    // },
    // {
    //   title: 'Electricity',
    //   value: 'electricity'
    // },
  ];
}

class Con implements Contact {
  recordID!: string;
  backTitle!: string;
  company!: string | null;
  emailAddresses: EmailAddress[] = [];
  displayName!: string;
  familyName!: string;
  givenName!: string;
  middleName!: string;
  jobTitle!: string;
  phoneNumbers: PhoneNumber[] = [];
  hasThumbnail: boolean = false;
  thumbnailPath!: string;
  isStarred: boolean = false;
  postalAddresses: PostalAddress[] = [];
  prefix!: string;
  suffix!: string;
  department!: string;
  birthday!: Birthday;
  imAddresses: InstantMessageAddress[] = [];
  urlAddresses: UrlAddress[] = [];
  note!: string;
}

export const  termsAndConditions = `
<html>
<body>
<h3>Terms and Conditions for Sako:</h3>
<h4>1. Services:</h4>
<p>Sako provides a platform for the sales of airtime, data subscriptions, and utility bills. We do not guarantee the availability, accuracy, or reliability of any products or services offered through our platform.</p>
<h4>2. User Accounts:</h4>
<p>You may be required to create an account to access certain features of Sako. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
<h4>3. User Conduct:</h4>
<p>You agree to use Sako in compliance with all applicable laws and regulations. You may not use Sako to engage in any unlawful, fraudulent, or abusive activities.</p>
<h4>4. Intellectual Property:</h4>
<p>All content and materials available on Sako, including the App, Site, logos, and trademarks, are the property of Sako or its licensors and are protected by intellectual property laws.</p>
<h4>5. Privacy:</h4>
<p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose your information.</p>
<h4>6. Limitation of Liability:</h4>
<p>To the fullest extent permitted by law, Sako shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of Sako.</p>
<h3>7. Governing Law:</h3>
<p>These Terms shall be governed by and construed in accordance with the laws of The Federal Republic of Nigeria, without regard to its conflict of law principles.</p>
<h3>8. Changes to Terms:</h3>
<p>We reserve the right to modify or replace these Terms at any time. Any changes will be effective immediately upon posting on this page.</p>
<h3>9. Contact Us:</h3>
<p>If you have any questions or concerns about these Terms, please contact us at <a href="mailto:support@sako.ng">Sako</a>.</p>
<p>By using Sako, you agree to these Terms and Conditions.</p>
</body>
</html>
`;

export const privacyPolicy = `
<html>
<body>
<h3>Privacy Policy Statement for Sako:</h3>
<p>At Sako, we are committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our mobile application, Sako, or visit our website.</p>
<h4>Information We Collect:</h4>
<ul>
  <li>Personal Information: When you use our services, we may collect personal information such as your name, email address, phone number, billing address, and payment information.</li>
  <li>Usage Information: We may collect information about how you interact with our app or website, including the pages you visit, the features you use, and the actions you take.</li>
  <li>Device Information: We may collect information about the device you use to access our services, including your device type, operating system, and unique device identifiers.</li>
  <li>Location Information: With your consent, we may collect your precise or approximate location information to provide location-based services.</li>
</ul>
<h4>How We Use Your Information:</h4>
<ul>
  <li>To Provide Services: We use your information to deliver the services you request, such as processing data subscriptions, airtime, and utility bill payments.</li>
  <li>To Personalize Your Experience: We may use your information to personalize your experience, such as showing you relevant content and offers.</li>
  <li>To Communicate with You: We may use your contact information to communicate with you about your account, transactions, and promotional offers.</li>
  <li>To Improve Our Services: We analyze user interactions to improve the functionality, performance, and security of our app and website.</li>
</ul>
<h4>Information Sharing and Disclosure:</h4>
<ul>
  <li>Third-Party Service Providers: We may share your information with third-party service providers who help us deliver our services, process payments, or analyze user data.</li>
  <li>Legal Requirements: We may disclose your information when required by law or in response to lawful requests by public authorities.</li>
  <li>Business Transfers: If Sako is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
</ul>
<h4>Data Security:</h4>
<p>We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
<h4>Your Choices:</h4>
<p>You have the right to access, update, or delete your personal information. You can also opt out of receiving promotional communications from us.</p>
<h4>Changes to This Policy:</h4>
<p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this Policy periodically.</p>
<p>By using Sako, you consent to the collection and use of your information as described in this Privacy Policy.</p>
</body>
</html>
`;
