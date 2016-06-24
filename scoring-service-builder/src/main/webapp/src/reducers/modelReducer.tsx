import * as _ from 'lodash';

import {
  FETCH_MODEL,
  REQUEST_MODEL,
  RECEIVE_MODEL,
  UPDATE_QUERY_STRING
} from '../actions/modelActions';

const initialState = {};

export const modelReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MODEL:
      return _.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_MODEL:
      return _.assign({}, state, {
        data: action.data,
        isFetching: false
      });
    case UPDATE_QUERY_STRING:
      return _.assign({}, state, {
        queryString: action.queryString
      });
    default:
      return state;
  }
};

function requestModel() {
  return {
    type: REQUEST_MODEL
  }
}

function receiveModel(data) {
  return {
    type: RECEIVE_MODEL,
    data
  }
}

export const updateQueryString = (queryString) => {
  return {
    type: UPDATE_QUERY_STRING,
    queryString
  }
};

const exampleModelResponse = {"m":{"_names":["Month","DayofMonth","DayOfWeek","DepTime","UniqueCarrier","Origin","Dest","Distance"],"_domains":[["c-1","c-10","c-11","c-12","c-2","c-3","c-4","c-5","c-6","c-7","c-8","c-9"],["c-1","c-10","c-11","c-12","c-13","c-14","c-15","c-16","c-17","c-18","c-19","c-2","c-20","c-21","c-22","c-23","c-24","c-25","c-26","c-27","c-28","c-29","c-3","c-30","c-31","c-4","c-5","c-6","c-7","c-8","c-9"],["c-1","c-2","c-3","c-4","c-5","c-6","c-7"],null,["AA","AQ","AS","B6","CO","DH","DL","EV","F9","FL","HA","HP","MQ","NW","OH","OO","TZ","UA","US","WN","XE","YV"],["ABE","ABI","ABQ","ABY","ACK","ACT","ACV","ACY","ADK","ADQ","AEX","AGS","AKN","ALB","AMA","ANC","APF","ASE","ATL","ATW","AUS","AVL","AVP","AZO","BDL","BET","BFL","BGM","BGR","BHM","BIL","BIS","BLI","BMI","BNA","BOI","BOS","BPT","BQK","BQN","BRO","BRW","BTM","BTR","BTV","BUF","BUR","BWI","BZN","CAE","CAK","CDC","CDV","CEC","CHA","CHO","CHS","CIC","CID","CLD","CLE","CLL","CLT","CMH","CMI","COD","COS","CPR","CRP","CRW","CSG","CVG","CWA","DAB","DAL","DAY","DBQ","DCA","DEN","DFW","DHN","DLG","DLH","DRO","DSM","DTW","EGE","EKO","ELP","ERI","EUG","EVV","EWR","EYW","FAI","FAR","FAT","FAY","FCA","FLG","FLL","FLO","FNT","FSD","FSM","FWA","GEG","GFK","GGG","GJT","GNV","GPT","GRB","GRK","GRR","GSO","GSP","GST","GTF","GTR","GUC","HDN","HKY","HLN","HNL","HOU","HPN","HRL","HSV","HTS","HVN","IAD","IAH","ICT","IDA","ILG","ILM","IND","IPL","ISO","ISP","ITO","IYK","JAC","JAN","JAX","JFK","JNU","KOA","KTN","LAN","LAS","LAW","LAX","LBB","LCH","LEX","LFT","LGA","LGB","LIH","LIT","LNK","LRD","LSE","LWB","LWS","LYH","MAF","MBS","MCI","MCN","MCO","MDT","MDW","MEI","MEM","MFE","MFR","MGM","MHT","MIA","MKE","MLB","MLI","MLU","MOB","MOD","MOT","MQT","MRY","MSN","MSO","MSP","MSY","MTJ","MYR","OAJ","OAK","OGG","OKC","OMA","OME","ONT","ORD","ORF","OTZ","OXR","PBI","PDX","PFN","PHF","PHL","PHX","PIA","PIE","PIH","PIT","PNS","PSC","PSE","PSG","PSP","PVD","PWM","RAP","RDD","RDM","RDU","RFD","RIC","RNO","ROA","ROC","RST","RSW","SAN","SAT","SAV","SBA","SBN","SBP","SCC","SCE","SDF","SEA","SFO","SGF","SGU","SHV","SIT","SJC","SJT","SJU","SLC","SMF","SMX","SNA","SPI","SPS","SRQ","STL","STT","STX","SUN","SWF","SYR","TEX","TLH","TOL","TPA","TRI","TUL","TUP","TUS","TVC","TWF","TXK","TYR","TYS","VCT","VIS","VLD","VPS","WRG","WYS","XNA","YAK","YUM"],["ABE","ABI","ABQ","ABY","ACK","ACT","ACV","ACY","ADQ","AEX","AGS","AKN","ALB","AMA","ANC","APF","ASE","ATL","ATW","AUS","AVL","AVP","AZO","BDL","BET","BFL","BGM","BGR","BHM","BIL","BIS","BLI","BMI","BNA","BOI","BOS","BPT","BQK","BQN","BRO","BRW","BTM","BTR","BTV","BUF","BUR","BWI","BZN","CAE","CAK","CDC","CDV","CEC","CHA","CHO","CHS","CIC","CID","CLD","CLE","CLL","CLT","CMH","CMI","COD","COS","CPR","CRP","CRW","CSG","CVG","CWA","DAB","DAL","DAY","DBQ","DCA","DEN","DFW","DHN","DLG","DLH","DRO","DSM","DTW","EGE","EKO","ELP","ERI","EUG","EVV","EWR","EYW","FAI","FAR","FAT","FAY","FCA","FLG","FLL","FLO","FNT","FSD","FSM","FWA","GEG","GFK","GGG","GJT","GNV","GPT","GRB","GRK","GRR","GSO","GSP","GST","GTF","GTR","GUC","HDN","HKY","HLN","HNL","HOU","HPN","HRL","HSV","HTS","HVN","IAD","IAH","ICT","IDA","ILG","ILM","IND","IPL","ISO","ISP","ITO","IYK","JAC","JAN","JAX","JFK","JNU","KOA","KTN","LAN","LAS","LAW","LAX","LBB","LCH","LEX","LFT","LGA","LGB","LIH","LIT","LNK","LRD","LSE","LWB","LWS","LYH","MAF","MBS","MCI","MCN","MCO","MDT","MDW","MEI","MEM","MFE","MFR","MGM","MHT","MIA","MKE","MLB","MLI","MLU","MOB","MOD","MOT","MQT","MRY","MSN","MSO","MSP","MSY","MTJ","MYR","OAK","OGG","OKC","OMA","OME","ONT","ORD","ORF","OTZ","OXR","PBI","PDX","PFN","PHF","PHL","PHX","PIA","PIE","PIH","PIT","PNS","PSC","PSE","PSG","PSP","PVD","PWM","RAP","RDD","RDM","RDU","RFD","RIC","RNO","ROA","ROC","RST","RSW","SAN","SAT","SAV","SBA","SBN","SBP","SCC","SCE","SDF","SEA","SFO","SGF","SGU","SHV","SIT","SJC","SJT","SJU","SLC","SMF","SMX","SNA","SOP","SPI","SPS","SRQ","STL","STT","STX","SUN","SWF","SYR","TEX","TLH","TOL","TPA","TRI","TTN","TUL","TUP","TUS","TVC","TWF","TXK","TYR","TYS","VCT","VIS","VLD","VPS","WRG","WYS","XNA","YAK","YUM"],null,["N","Y"]]},"modelColumnNameToIndexMap":{"Origin":5,"Month":0,"DayOfWeek":2,"Dest":6,"UniqueCarrier":4,"DayofMonth":1,"Distance":7,"DepTime":3},"domainMap":{"0":{"c-10":1,"c-1":0,"c-12":3,"c-11":2,"c-3":5,"c-2":4,"c-5":7,"c-4":6,"c-7":9,"c-6":8,"c-9":11,"c-8":10},"1":{"c-25":17,"c-24":16,"c-27":19,"c-26":18,"c-21":13,"c-20":12,"c-1":0,"c-23":15,"c-22":14,"c-3":22,"c-2":11,"c-5":26,"c-4":25,"c-7":28,"c-6":27,"c-9":30,"c-8":29,"c-29":21,"c-28":20,"c-14":5,"c-13":4,"c-16":7,"c-15":6,"c-10":1,"c-31":24,"c-12":3,"c-11":2,"c-30":23,"c-18":9,"c-17":8,"c-19":10},"2":{"c-1":0,"c-3":2,"c-2":1,"c-5":4,"c-4":3,"c-7":6,"c-6":5},"4":{"AA":0,"OO":15,"DH":5,"MQ":12,"FL":9,"TZ":16,"DL":6,"HP":11,"NW":13,"CO":4,"UA":17,"XE":20,"AQ":1,"EV":7,"AS":2,"F9":8,"B6":3,"WN":19,"HA":10,"OH":14,"YV":21,"US":18},"5":{"JAX":145,"RAP":225,"TVC":275,"VIS":281,"CDC":51,"IPL":138,"KTN":149,"BRW":41,"TEX":267,"HNL":124,"STL":261,"XNA":286,"STT":262,"CDV":52,"DFW":79,"PNS":218,"SDF":244,"LWB":165,"STX":263,"MHT":180,"LFT":157,"CEC":53,"EYW":93,"OMA":201,"TWF":276,"MIA":181,"LGB":159,"OME":202,"LGA":158,"MYR":196,"LWS":166,"IAD":131,"SUN":264,"SEA":245,"HOU":125,"IAH":132,"RST":234,"CVG":71,"RSW":235,"BTM":42,"FLG":99,"BTR":43,"YAK":287,"ABE":0,"BTV":44,"TXK":277,"FLL":100,"HPN":126,"ABI":1,"FLO":101,"BDL":24,"DHN":80,"CWA":72,"GNV":110,"VLD":282,"ABQ":2,"BUF":45,"ASE":17,"RDD":226,"ONT":203,"ABY":3,"LYH":167,"RDM":227,"SFO":246,"BUR":46,"RDU":228,"SWF":265,"ISO":139,"MKE":182,"ISP":140,"EKO":87,"ACK":4,"LIH":160,"TYR":278,"TYS":279,"BET":25,"ACT":5,"SGF":247,"ACV":6,"LIT":161,"ACY":7,"ATL":18,"ICT":133,"CHA":54,"SGU":248,"MLB":183,"HRL":127,"ATW":19,"ITO":141,"IDA":134,"ADK":8,"ELP":88,"BFL":26,"GPT":111,"CHO":55,"MLI":184,"FNT":102,"ADQ":9,"JFK":146,"CHS":56,"RFD":229,"BWI":47,"PBI":208,"MLU":185,"CIC":57,"AUS":20,"CID":58,"SHV":249,"PSC":219,"PSE":220,"PSG":221,"BGM":27,"HSV":128,"BGR":28,"PSP":222,"SYR":266,"YUM":288,"AEX":10,"GRB":112,"AVL":21,"OAK":198,"OAJ":197,"AVP":22,"DLG":81,"SIT":250,"ORD":204,"DLH":82,"GRK":113,"ORF":205,"BHM":29,"GRR":114,"HTS":129,"SJC":251,"WRG":284,"TLH":268,"HDN":121,"VPS":283,"SJT":252,"SJU":253,"MOB":186,"GSO":115,"MOD":187,"BIL":30,"GSP":116,"PDX":209,"GST":117,"AGS":11,"BIS":31,"RIC":230,"FAI":94,"MOT":188,"FAR":95,"BZN":48,"FAT":96,"GTF":118,"CLD":59,"CLE":60,"FAY":97,"PVD":223,"HVN":130,"CLL":61,"GTR":119,"LNK":162,"CLT":62,"SLC":254,"GUC":120,"OTZ":206,"FSD":103,"PFN":210,"IYK":142,"CMI":64,"CMH":63,"FSM":104,"FCA":98,"PWM":224,"GEG":106,"SMF":255,"TOL":269,"MQT":189,"MAF":168,"AZO":23,"ERI":89,"BLI":32,"SMX":256,"TPA":270,"VCT":280,"SNA":257,"GFK":107,"PHF":211,"MRY":190,"PHL":212,"COD":65,"KOA":148,"BMI":33,"MBS":169,"PHX":213,"AKN":12,"DAB":73,"COS":66,"GGG":108,"MSO":192,"MSN":191,"PIA":214,"MSP":193,"PIE":215,"DAL":74,"OGG":199,"PIH":216,"MCI":170,"MSY":194,"BNA":34,"ALB":13,"LAN":150,"MCO":172,"MCN":171,"PIT":217,"DAY":75,"LAS":151,"LRD":163,"DRO":83,"LAX":153,"MTJ":195,"LAW":152,"CPR":67,"ILG":135,"OXR":207,"TRI":271,"ILM":136,"LBB":154,"SPI":258,"JNU":147,"FWA":105,"DBQ":76,"RNO":231,"AMA":14,"EUG":90,"SPS":259,"MDT":173,"BOI":35,"DSM":84,"LSE":164,"MDW":174,"DCA":77,"ROA":232,"CAE":49,"BOS":36,"ROC":233,"CAK":50,"LCH":155,"MEI":175,"WYS":285,"MEM":176,"ANC":15,"HKY":122,"IND":137,"CRP":68,"SAN":236,"EVV":91,"DTW":85,"BPT":37,"SAT":237,"CRW":69,"SAV":238,"HLN":123,"MFE":177,"GJT":109,"SBA":239,"SRQ":260,"CSG":70,"MFR":178,"BQK":38,"BQN":39,"SBN":240,"SBP":241,"EWR":92,"EGE":86,"OKC":200,"TUL":272,"DEN":78,"JAC":143,"TUP":273,"MGM":179,"SCC":242,"TUS":274,"SCE":243,"JAN":144,"APF":16,"BRO":40,"LEX":156},"6":{"JAX":144,"RAP":223,"TVC":275,"VIS":281,"CDC":50,"IPL":137,"KTN":148,"BRW":40,"TEX":266,"HNL":123,"STL":260,"XNA":286,"STT":261,"CDV":51,"DFW":78,"PNS":216,"SDF":242,"LWB":164,"STX":262,"MHT":179,"LFT":156,"CEC":52,"EYW":92,"OMA":199,"TWF":276,"MIA":180,"LGB":158,"OME":200,"LGA":157,"MYR":195,"LWS":165,"IAD":130,"SUN":263,"SEA":243,"HOU":124,"IAH":131,"RST":232,"CVG":70,"RSW":233,"BTM":41,"FLG":98,"BTR":42,"YAK":287,"ABE":0,"BTV":43,"TXK":277,"FLL":99,"HPN":125,"ABI":1,"FLO":100,"BDL":23,"DHN":79,"CWA":71,"GNV":109,"VLD":282,"ABQ":2,"BUF":44,"ASE":16,"RDD":224,"ONT":201,"ABY":3,"LYH":166,"RDM":225,"SFO":244,"BUR":45,"RDU":226,"SWF":264,"ISO":138,"MKE":181,"ISP":139,"EKO":86,"ACK":4,"LIH":159,"TYR":278,"TYS":279,"BET":24,"ACT":5,"SGF":245,"ACV":6,"LIT":160,"ACY":7,"ATL":17,"ICT":132,"CHA":53,"SGU":246,"MLB":182,"HRL":126,"ATW":18,"ITO":140,"IDA":133,"ELP":87,"BFL":25,"GPT":110,"CHO":54,"MLI":183,"FNT":101,"ADQ":8,"JFK":145,"CHS":55,"RFD":227,"BWI":46,"PBI":206,"MLU":184,"CIC":56,"AUS":19,"CID":57,"SHV":247,"PSC":217,"PSE":218,"PSG":219,"BGM":26,"HSV":127,"BGR":27,"PSP":220,"SYR":265,"YUM":288,"AEX":9,"GRB":111,"AVL":20,"OAK":196,"AVP":21,"DLG":80,"SIT":248,"ORD":202,"DLH":81,"GRK":112,"ORF":203,"BHM":28,"GRR":113,"HTS":128,"SJC":249,"WRG":284,"TLH":267,"HDN":120,"VPS":283,"SJT":250,"SJU":251,"MOB":185,"GSO":114,"MOD":186,"BIL":29,"GSP":115,"PDX":207,"GST":116,"AGS":10,"BIS":30,"RIC":228,"FAI":93,"MOT":187,"FAR":94,"BZN":47,"FAT":95,"GTF":117,"CLD":58,"CLE":59,"FAY":96,"PVD":221,"HVN":129,"CLL":60,"GTR":118,"LNK":161,"CLT":61,"SLC":252,"GUC":119,"OTZ":204,"FSD":102,"PFN":208,"IYK":141,"CMI":63,"CMH":62,"FSM":103,"FCA":97,"PWM":222,"GEG":105,"SMF":253,"TOL":268,"MQT":188,"MAF":167,"AZO":22,"ERI":88,"BLI":31,"SMX":254,"TPA":269,"VCT":280,"SNA":255,"GFK":106,"PHF":209,"MRY":189,"PHL":210,"COD":64,"KOA":147,"BMI":32,"MBS":168,"PHX":211,"AKN":11,"DAB":72,"COS":65,"GGG":107,"MSO":191,"MSN":190,"PIA":212,"MSP":192,"PIE":213,"DAL":73,"OGG":197,"PIH":214,"MCI":169,"MSY":193,"BNA":33,"SOP":256,"ALB":12,"LAN":149,"MCO":171,"MCN":170,"PIT":215,"DAY":74,"LAS":150,"LRD":162,"DRO":82,"LAX":152,"MTJ":194,"LAW":151,"CPR":66,"ILG":134,"OXR":205,"TRI":270,"ILM":135,"LBB":153,"SPI":257,"JNU":146,"FWA":104,"DBQ":75,"RNO":229,"AMA":13,"EUG":89,"SPS":258,"MDT":172,"BOI":34,"DSM":83,"LSE":163,"MDW":173,"DCA":76,"ROA":230,"CAE":48,"BOS":35,"ROC":231,"CAK":49,"LCH":154,"MEI":174,"WYS":285,"MEM":175,"ANC":14,"HKY":121,"IND":136,"CRP":67,"SAN":234,"EVV":90,"DTW":84,"BPT":36,"SAT":235,"CRW":68,"SAV":236,"HLN":122,"MFE":176,"TTN":271,"GJT":108,"SBA":237,"SRQ":259,"CSG":69,"MFR":177,"BQK":37,"BQN":38,"SBN":238,"SBP":239,"EWR":91,"EGE":85,"OKC":198,"TUL":272,"DEN":77,"JAC":142,"TUP":273,"MGM":178,"SCC":240,"TUS":274,"SCE":241,"JAN":143,"APF":15,"BRO":39,"LEX":155}}};

export const fetchModel = (): Function => {
  return function(dispatch) {
    dispatch(requestModel());
    return dispatch(receiveModel(exampleModelResponse));
    // return fetch('/info')
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveStatistics(exampleStatisticsResponse)));
  };
};