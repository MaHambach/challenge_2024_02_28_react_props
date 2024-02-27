import './BlogMain.css'
export default function blogMain():JSX.Element {
    return (
        <main className="blogMain">
            <div className="divTextAndImage">
                <div className="divText">
                    <article>
                        <h2>My Blog</h2>
                        <p>This is my first blog post. I am so excited to share my thoughts with you.</p>
                        <ul>
                            <li>First point</li>
                            <li>Second point</li>
                            <li>Third point</li>
                        </ul>
                        <a href="https://www.example.com">Click here</a> to learn more.
                        <blockquote cite="https://www.example.com">This is a quote from a famous person.</blockquote>
                    </article>
                </div>
                <div className="divImage">
                    <img className="imgBienenBild"
                         src="https://images.freeimages.com/images/large-previews/aed/three-bees-on-sunflower-1337029.jpg"
                         alt="Three Bees on Sunflower" width="300" height="200"/>
                    <p className="pSource">&copy; "three bees on sunflower" von Krappweis</p>
                </div>
            </div>
            <div className="divBlogPosts">
                {articleHtml(blogArticles)}
            </div>
        </main>
    );
}

function articleHtml(list: BlogArticle[]): JSX.Element[] {
   list.sort((a:BlogArticle, b:BlogArticle):number => {
        // Konvertiere die Datumsspalten in JavaScript Date Objekte
        const dateA:Date = new Date(a.date);
        const dateB:Date = new Date(b.date);

        // Vergleiche die Datumswerte und gib das Ergebnis zurück
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return 0;
    });

    return list.map((article:BlogArticle, index:number) => {
        return (
            <article key={index} className={"main-article"}>
                <h2 className="article-title">{article.title}</h2>
                <p className="article-date">Veröffentlicht am {article.date.getDate() + "." + (article.date.getMonth()+1) + "."+article.date.getFullYear()}</p>
                <p className="article-content">{article.summary}</p>
                <details className="article-details">
                    {article.text.map((point:string, index:number) => {
                        return <p key={index}>{point}</p>
                    })}
                </details>
            </article>
        )
    })
}

type BlogArticle = {
    id: number;
    title: string;
    date: Date;
    summary: string;
    text: string[];
}

const blogArticles: BlogArticle[] = [
    {
        id: 1,
        title: "Die faszinierende Welt der Bienen",
        date: new Date('2024-02-01'),
        summary: "Bienen sind erstaunliche Insekten, die eine entscheidende Rolle in unserem Ökosystem spielen.",
        text: [
            "Bienen sind erstaunliche Insekten, die eine entscheidende Rolle in unserem Ökosystem spielen.",
            "Als Hauptbestäuber vieler Pflanzenarten sind sie unverzichtbar für die Produktion von Nahrungsmitteln und die Aufrechterhaltung der biologischen Vielfalt. Aber ihre Bedeutung geht weit über das Bestäuben hinaus.",
            "Wusstest du, dass Bienen äußerst soziale Insekten sind, die in komplexen Gemeinschaften, den sogenannten Bienenvölkern, leben? Jedes Volk besteht aus einer Königin, Arbeiterinnen und Drohnen, die alle spezifische Rollen und Aufgaben haben. Die Königin ist für die Eiablage verantwortlich, während die Arbeiterinnen die täglichen Aufgaben wie die Futtersuche, die Pflege der Brut und die Verteidigung des Nestes übernehmen. Die Drohnen hingegen haben die Aufgabe, die Königin zu begatten.",
            "Ein weiteres faszinierendes Merkmal der Bienen ist ihre bemerkenswerte Kommunikationsfähigkeit. Sie verwenden komplexe Tanzsprachen, um ihren Artgenossen die Lage von Blüten und anderen Ressourcen mitzuteilen. Durch bestimmte Tanzbewegungen können sie ihren Kolleginnen genau mitteilen, in welcher Richtung und Entfernung sie eine bestimmte Nahrungsquelle finden.",
            "Aber nicht nur das: Bienen produzieren auch eines der erstaunlichsten Naturprodukte - Honig. Durch das Sammeln von Nektar und dessen Umwandlung durch spezielle Drüsen in ihrem Körper entsteht dieser süße und klebrige Stoff, der nicht nur als Nahrung dient, sondern auch für seine medizinischen und antibakteriellen Eigenschaften geschätzt wird.",
            "In der modernen Welt sind Bienen jedoch vielen Bedrohungen ausgesetzt. Der Einsatz von Pestiziden, der Verlust natürlicher Lebensräume und der Klimawandel gefährden das Überleben dieser wichtigen Insekten. Es ist daher von entscheidender Bedeutung, Maßnahmen zum Schutz der Bienen und ihres Lebensraums zu ergreifen, um ihre wichtige Rolle in unserem Ökosystem zu erhalten."
        ]
    },
    {
        id: 2,
        title: "Die Bedeutung der Bestäubung",
        date: new Date('2024-02-05'),
        summary: "Ohne die Bestäubung durch Bienen und andere Bestäuber wären viele Pflanzenarten nicht in der Lage, sich fortzupflanzen...",
        text: [
            "Ohne die Bestäubung durch Bienen und andere Bestäuber wären viele Pflanzenarten nicht in der Lage, sich fortzupflanzen. Dieser wichtige Prozess ermöglicht es den Pflanzen, Samen zu produzieren und sich zu vermehren, was wiederum die Grundlage für die gesamte Nahrungsmittelproduktion bildet.",
            "Die Bedeutung der Bestäubung erstreckt sich jedoch über die Pflanzenwelt hinaus. Viele Tierarten, einschließlich Vögel, Säugetiere und Insekten, hängen direkt oder indirekt von bestäubten Pflanzen für ihre Nahrung ab. Durch die Bestäubung entstehen auch vielfältige Lebensräume für eine Vielzahl von Tierarten.",
            "Darüber hinaus spielt die Bestäubung eine wichtige Rolle in der Landwirtschaft. Viele Nutzpflanzen, darunter Obst- und Gemüsesorten, benötigen Bestäuber, um eine gute Ernte zu produzieren. Ohne ausreichende Bestäubung können Ertragsverluste auftreten, was sich negativ auf die Nahrungsmittelversorgung und die Wirtschaft auswirken kann.",
            "In jüngster Zeit haben jedoch Bedenken über den Rückgang der Bestäuberpopulationen weltweit zugenommen. Faktoren wie der Einsatz von Pestiziden, der Verlust natürlicher Lebensräume und der Klimawandel haben zu einem Rückgang der Bestäuberpopulationen geführt, was ernsthafte Auswirkungen auf die Nahrungsmittelproduktion und die biologische Vielfalt haben kann.",
            "Es ist daher von entscheidender Bedeutung, Maßnahmen zum Schutz der Bestäuber zu ergreifen und ihre Lebensräume zu erhalten. Dies kann durch die Schaffung von blühenden Lebensräumen, die Reduzierung des Einsatzes von Pestiziden und die Förderung nachhaltiger landwirtschaftlicher Praktiken erreicht werden."
        ]
    },
    {
        id: 3,
        title: "Die soziale Struktur eines Bienenstocks",
        date: new Date("2024-02-10"),
        summary: "Ein Bienenstock ist eine komplexe Gemeinschaft von Bienen, die in einem gut organisierten sozialen System leben...",
        text: [
            "Ein Bienenstock ist eine komplexe Gemeinschaft von Bienen, die in einem gut organisierten sozialen System leben. Innerhalb des Bienenstocks gibt es verschiedene Kasten von Bienen, die unterschiedliche Rollen und Aufgaben haben.",
            "Die Königin ist das zentrale Mitglied des Bienenstocks und verantwortlich für die Eiablage. Sie wird von den Arbeiterinnen gepflegt und ernährt und spielt eine entscheidende Rolle bei der Fortpflanzung des Bienenstocks.",
            "Die Arbeiterinnen bilden die Mehrheit der Bienen im Bienenstock und übernehmen eine Vielzahl von Aufgaben, darunter die Nahrungssuche, die Pflege der Brut und die Verteidigung des Bienenstocks. Sie sind für den reibungslosen Betrieb des Bienenstocks unerlässlich.",
            "Die Drohnen sind die männlichen Bienen im Bienenstock und ihre Hauptaufgabe besteht darin, sich mit der Königin zu paaren. Sie haben keine Stacheln und können keine Nahrung sammeln oder den Bienenstock verteidigen.",
            "Die soziale Struktur eines Bienenstocks ist faszinierend und gut durchdacht. Jede Biene trägt auf ihre Weise zum Wohlergehen des Bienenstocks bei, und ihre kooperative Zusammenarbeit ist entscheidend für das Überleben der Kolonie."
        ]
    },
    {
        id: 4,
        title: "Bienenprodukte und ihre Verwendung",
        date: new Date(2024, 1, 15),
        summary: "Bienen produzieren nicht nur Honig, sondern auch andere nützliche Produkte wie Wachs, Propolis und Gelée Royale...",
        text: [
            "Bienen produzieren nicht nur Honig, sondern auch andere nützliche Produkte wie Wachs, Propolis und Gelée Royale. Jedes dieser Produkte hat seine eigenen einzigartigen Eigenschaften und Anwendungen.",
            "Wachs wird von Bienen zur Herstellung ihrer Waben verwendet. Es ist ein vielseitiges Material, das in der Kerzenherstellung, Kosmetikproduktion und sogar in der Medizin Verwendung findet.",
            "Propolis ist eine klebrige Substanz, die Bienen aus Harz herstellen, das sie von Bäumen sammeln. Es wird verwendet, um den Bienenstock abzudichten und vor Krankheiten zu schützen. Propolis hat auch antimikrobielle und entzündungshemmende Eigenschaften und wird in der alternativen Medizin häufig zur Behandlung von Erkältungen und anderen Beschwerden eingesetzt.",
            "Gelée Royale ist eine spezielle Substanz, die von Bienenlarven gefüttert wird. Es ist reich an Nährstoffen und wird von Bienen verwendet, um ihre Königinnenlarven zu ernähren. Gelée Royale wird oft als Nahrungsergänzungsmittel für Menschen verwendet und soll eine Vielzahl von gesundheitlichen Vorteilen bieten, einschließlich gesteigerter Energie und Immunität."
        ]
    },
    {
        id: 5,
        title: "Die Bedrohung der Bienen und was wir tun können",
        date: new Date(2024, 1, 20),
        summary: "Bienen sind heute verschiedenen Bedrohungen ausgesetzt...",
        text: [
            "Bienen sind heute verschiedenen Bedrohungen ausgesetzt, darunter Pestizide, Krankheiten und Lebensraumverlust. Es ist wichtig, Maßnahmen zu ergreifen, um diese wichtigen Bestäuber zu schützen.",
            "Ein wichtiger Schritt ist die Reduzierung des Einsatzes von Pestiziden, insbesondere solcher, die für Bienen besonders schädlich sind. Landwirte können alternative Methoden wie biologische Schädlingsbekämpfung und den Anbau von bienenfreundlichen Pflanzen verwenden, um den Einsatz von Chemikalien zu minimieren.",
            "Es ist auch wichtig, Lebensräume für Bienen zu schaffen und zu erhalten. Das bedeutet, blühende Pflanzen anzubauen, die reich an Nektar und Pollen sind, sowie natürliche Lebensräume wie Wiesen und Wälder zu schützen.",
            "Darüber hinaus können Einzelpersonen dazu beitragen, indem sie bienenfreundliche Gärten anlegen, bienenfreundliche Produkte kaufen und sich für den Schutz der Bienen einsetzen."
        ]
    },
    {
        id: 6,
        title: "Wie man einen bienenfreundlichen Garten anlegt",
        date: new Date(2024, 1, 25),
        summary: "Mit einigen einfachen Schritten können Sie Ihren Garten bienenfreundlicher gestalten...",
        text: [
            "Mit einigen einfachen Schritten können Sie Ihren Garten bienenfreundlicher gestalten und dazu beitragen, die Lebensbedingungen für diese wichtigen Insekten zu verbessern.",
            "1. Wählen Sie bienenfreundliche Pflanzen: Entscheiden Sie sich für Pflanzen, die reich an Nektar und Pollen sind, wie Lavendel, Sonnenblumen, Salbei und Klee.",
            "2. Vermeiden Sie Pestizide: Verzichten Sie auf den Einsatz von chemischen Pestiziden, da diese für Bienen schädlich sein können. Verwenden Sie stattdessen natürliche Schädlingsbekämpfungsmethoden.",
            "3. Pflanzen Sie in Gruppen: Bienen bevorzugen große Gruppen von Blumen, da sie dadurch effizienter Nahrung sammeln können. Pflanzen Sie also Pflanzen in Gruppen oder Beeten.",
            "4. Bieten Sie Wasser an: Stellen Sie eine flache Schale mit Wasser in Ihrem Garten auf, damit Bienen trinken können.",
            "5. Lassen Sie einige Bereiche wild: Lassen Sie Teile Ihres Gartens unberührt und wild wachsen, um natürliche Lebensräume für Bienen zu schaffen.",
            "Indem Sie diese Tipps befolgen, können Sie dazu beitragen, einen lebendigen und gesunden Lebensraum für Bienen in Ihrem eigenen Garten zu schaffen."
        ]
    }
];
