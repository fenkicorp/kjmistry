/* eslint max-len: ["error", { "code": 1080 }]*/

// import angular from 'angular';

angular
    .module('plunker', [], ($interpolateProvider) => {
      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
    })
    .controller('MainCtrl', function($scope) {
      const share = (t)=> {
        const textToShare = t;

        // create temp element
        const copyElement = document.createElement('span');
        copyElement.appendChild(document.createTextNode(textToShare));
        copyElement.id = 'tempCopyToClipboard';
        angular.element(document.body.append(copyElement));

        // select the text
        const range = document.createRange();
        range.selectNode(copyElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        // copy & cleanup
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        copyElement.remove();
      };

      $scope.move = (note, dir) => {
        if (dir > 0) {
          const match = $scope.notes.filter((x) => x.order == (note.order + 1));
          if (match != null && match.length > 0) {
            match[0].order--;
            note.order++;
          }
        }

        if (dir < 0) {
          const match = $scope.notes.filter((x) => x.order == (note.order - 1));
          if (match != null && match.length > 0) {
            match[0].order++;
            note.order--;
          }
        }
        return false;
      };

      $scope.saveNote = () => {
        console.log('here');
        $scope.notes.push({
          title: $scope.selectedNote.title,
          body: $scope.selectedNote.body,
          order: 3,
        });
        $scope.selectedNote = {};
      };

      $scope.addNote = () => {
        $scope.selectedNote = {};
      };

      $scope.copyNote = (n) => {
        share(n.body);
      };

      $scope.editNote = (n) => {
        console.log(n);
        $scope.selectedNote = n;
      };

      $scope.deleteNote = (n) => {
        $scope.notes.splice($scope.notes.indexOf(n), 1);
      };

      $scope.notes = [
        {
          title: 'Exam',
          body: `
      Exam
      PCO:nil
      MH/SH: Updated
      EO: Lymph NAD, TMJ NAD
      I/O: ST NAD, Cove
      HT: NAD
      OH: good

      Charting and BPE done BPE explained to pt

      RAD's: bl+caries - Q2 positioning
      - no abnormal rl's
      - good bl's
      - showed pt rads

      Perio Health: good
      Caries Risk: low
      NCSTL Risk: low
      Cancer Risk: low

      dx
      localised supragingival calc on lower ants

      tx plan

      tx today
      S&P done. OHI given

      TC B1. PTCA 6/12
      `,
          order: 0,
        },
        {
          title: 'Tx Crown fit',
          body: `rfa: crown fit
pco: nil
mh/sh: nc

o/e:
temp crown still in place
removed with excavator

today:
prep cleaned with uss + polished with prophypaste
crown tried in
occi checked
relyx unicem used
tack cured > excess removed
fully cured
occl rechecked
pt happy
poig`,

          order: 1,
        },
        {
          title: 'Tx Fills',
          body: `rfa: fills
mh/sh: nc
pco: nil

LA given

**

caries removed
matrix placed
amal placed
etched, prime and bonded
composite placed
occl checked and adj
poig`,

          order: 2,
        },

        {
          title: 'Tx Crown Prep',
          body: `rfa: Crown prep

Discussed risks - non-vitalisation/ need for RCT/XLA in future
Confirmed crown > silver B3. PFM, all white ~ £350-400
Explained procedure

LA given
**

U+L alginate imps taken (temp crown imp + opposing arch)

crown prep'd for metal crown
prep imp taken in putty+light-bodied
bite reg paste used
temp crown made with structur + tempbond
occl checked and adj
poig

sent to rdl **
return **

nv
crown fit`,

          order: 3,
        },

        {
          title: 'Dx Perio',
          body: `Generalised/ localised periodontitis Stage Grade,
currently unstable with bop / currently stable/ currently in remission
RF: Ex-Smoker / suboptimal plaque control`,

          order: 4,
        },

        {
          title: 'TP Perio',
          body: `Informed patient of gum disease. Pt reports not TPing or flossing daily.
Explained causes and progression of gum disease towards tooth loss.
Adv daily IDC
Offered pero tx adv benefit is limited if daily IDC is not done. Can reassess in 3/12 for pero tx.
Pt understands and consents to be reassessed
demo'd TPs. Explained the patient is responsible for controlling own gum disease, we offer adjunctive tx to aid cleaning deeper pockets if IDC complaint.`,

          order: 5,
        },

        {
          title: 'Tx Perio',
          body: `rfa: perio tx
pco: nil
mh/sh: nc

Reinforced TP brushing daily
Pt is complaint

Perio Charting done

LA given

***

RSI done with USS/HS in pockets greater than 3mm
checked with BPE probe - smooth surfaces

Gross Scale done with USS/ HS
polishing done
TC`,

          order: 6,
        },

        {
          title: 'Tx XLA',
          body: `rfa: XLA

pco: nil
mh/sh: nc

Risks discussed

- root fracture, crown fracture (including to adjacent teeth), bleeding, bruising, dry socket, need for surgica,l possible referral if very difficult, OAC

Pl consents to continue

LA Given


XLA'd with luxator + forceps
Apices intact
HA
POIG - written + verbal

Pt well on leaving`,

          order: 7,
        },

        {
          title: 'Tx RCT',
          body: `rfa: RCT
pco: nil
mh/sh: nc

Discussed RCT procedure - risks: hypochlorite incident, root perf, file fracture, not finding all canals > affects prognosis, referral to endodontist - higher success rate (pvt option). If RCT fails > Re-RCT can be possible but with lower success rate.

Adv crown recommended to prevent further fracture after RCT B3(silver crown), PFM Q350 or all white Q400.
If filling is placed afterwards - B2 - increased fracture risk exists.

LA given
***

access made until canal orifices found
rubber dam placed
3 canals found MB, P. DB
canals scouted with size 10
apex locator > WL **mm with size 10

GGs used to flare coronal opening
Canals prep'd with rotary 4%>6% to WL
irrigated with naoh and recapitulated throughout

PPs used
6% GPs placed to WL

PA taken Q1
Gp within **mm from rad apex

GPs placed with tubliseal to WL+trimmed
Fuji IX GI base placed
etched prime and bonded
A2 comp placed
occl checked and adj

Post-op PA taken Q1
GPs appear within 1 mm of apices

showed pt

NV
crown prep`,


          order: 8,
        },

        {
          title: 'TP Stabilisation',
          body: `Stabilisation fills

Informed pt of high decay risk
Adv options: fills or leave and monitor (due to risk > pulpal involvement >RCT/XLA likely) Pt consents to fills b2

Will place stabilisation fills, when caries risk controlled > replace with definitive restorations (another b2 charge in future)
Pt consents

TP 5000ppm prescribed
dietary advice given. Explained need to limit sugar intakes to less than 5 times day.`,


          order: 9,
        },


        {
          title: 'TP Fills',
          body: `Informed pt decay is present. Caused by increased sugar frequency (>5 sugar intake daily) rather than amount eaten. Need to assess/control diet to prevent higher decay risk.
Options:
1 Fillings (nhs b2 amal or pvt white fills Q85 - 120
2 Leave and monitor. Risk of decay worsening > long term possible infection into nerve requiring RCT/XLA

Pp opts for**
Due to higher decay risk - 3x NaF TP 5000ppm prescribed`,


          order: 10,
        },


        {
          title: 'TP Infected Tooth',
          body: `Prov dx:
Reversible/Irreversible pulpitis

Explained to patient tooth has deep decay close to the nerves within tooth.
Tooth appears at borderline of becoming infected with possibility of reverting back to normal.
Adv temp filling today (possibility tooth becomes symptom free) - to monitor long term
If pain worsens long term » tooth is infected > requires RCT b2+ possible crown B3/ XLA b2  - with gap > B3 bridge/denture/pvt implant ~ £1.8k

pt understands + showed xray - deepness of decay with relation to nerve
consents to temp fill today`,


          order: 11,
        },

        {
          title: 'TP XLA/RCT/Gap',
          body: `Adv tooth is infected

1. Save tooth with RCT - Risk of hypochlorite incident, tooth perf, file fracture, RCT failure b2 (>retreatment). When done - filling (inc risk of fracture) or silver crown B3 (better long term prognosis) White crown £350-400.
2. XLA gap > bridge b3, denture b3, implant ~ Q1800.
3. Leave - infection can worsen and affect adjacent dentition. Can possibly become life-threatening if infection spreads and affects breathing.

Pt opts for: `,


          order: 12,
        },

        {
          title: 'x',
          body: `x`,


          order: 13,
        },
      ];
    });
