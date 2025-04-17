<script>
import {usePockerStore} from "../../../stores/counter"
import { mapActions, mapState } from 'pinia'

  export default {
  name: 'MainTableButtons',
  components: {

  },
  methods:{
    ...mapActions(usePockerStore, ['changeCurrentTable']),
  },
    computed:{
        ...mapState(usePockerStore, ['currentTable'])
    }
};

</script>
<template>
  <div class="mTB">
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['AA_o']}">AA</button>
        <button class="MainTableButton_s" :style="{background: currentTable['AK_s']}">AK</button>
        <button class="MainTableButton_s" :style="{background: currentTable['AQ_s']}">AQ</button>
        <button class="MainTableButton_s" :style="{background: currentTable['AJ_s']}">AJ</button>
        <button class="MainTableButton_s" :style="{background: currentTable['AT_s']}">AT</button>
        <button class="MainTableButton_s" :style="{background: currentTable['A9_s']}">A9</button>
        <button class="MainTableButton_s" :style="{background: currentTable['A8_s']}">A8</button>
        <button class="MainTableButton_s" :style="{background: currentTable['A7_s']}">A7</button>
        <button class="MainTableButton_s" :style="{background: currentTable['A6_s']}">A6</button>
        <button class="MainTableButton_s" :style="{background: currentTable['A5_s']}">A5</button>
        <button class="MainTableButton_s" :style="{background: currentTable['A4_s']}">A4</button>
        <button class="MainTableButton_s" :style="{background: currentTable['A3_s']}">A3</button>
        <button class="MainTableButton_s" :style="{background: currentTable['A2_s']}">A2</button>
  </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['KA_o']}">AK</button>
        <button class="MainTableButton_o" :style="{background: currentTable['KK_o']}">KK</button>
        <button class="MainTableButton_s" :style="{background: currentTable['KQ_s']}">KQ</button>
        <button class="MainTableButton_s" :style="{background: currentTable['KJ_s']}">KJ</button>
        <button class="MainTableButton_s" :style="{background: currentTable['KT_s']}">KT</button>
        <button class="MainTableButton_s" :style="{background: currentTable['K9_s']}">K9</button>
        <button class="MainTableButton_s" :style="{background: currentTable['K8_s']}">K8</button>
        <button class="MainTableButton_s" :style="{background: currentTable['K7_s']}">K7</button>
        <button class="MainTableButton_s" :style="{background: currentTable['K6_s']}">K6</button>
        <button class="MainTableButton_s" :style="{background: currentTable['K5_s']}">K5</button>
        <button class="MainTableButton_s" :style="{background: currentTable['K4_s']}">K4</button>
        <button class="MainTableButton_s" :style="{background: currentTable['K3_s']}">K3</button>
        <button class="MainTableButton_s" :style="{background: currentTable['K2_s']}">K2</button>
  </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['QA_o']}">AQ</button>
        <button class="MainTableButton_o" :style="{background: currentTable['QK_o']}">KQ</button>
        <button class="MainTableButton_o" :style="{background: currentTable['QQ_o']}">QQ</button>
        <button class="MainTableButton_s" :style="{background: currentTable['QJ_s']}">QJ</button>
        <button class="MainTableButton_s" :style="{background: currentTable['QT_s']}">QT</button>
        <button class="MainTableButton_s" :style="{background: currentTable['Q9_s']}">Q9</button>
        <button class="MainTableButton_s" :style="{background: currentTable['Q8_s']}">Q8</button>
        <button class="MainTableButton_s" :style="{background: currentTable['Q7_s']}">Q7</button>
        <button class="MainTableButton_s" :style="{background: currentTable['Q6_s']}">Q6</button>
        <button class="MainTableButton_s" :style="{background: currentTable['Q5_s']}">Q5</button>
        <button class="MainTableButton_s" :style="{background: currentTable['Q4_s']}">Q4</button>
        <button class="MainTableButton_s" :style="{background: currentTable['Q3_s']}">Q3</button>
        <button class="MainTableButton_s" :style="{background: currentTable['Q2_s']}">Q2</button>
   </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['JA_o']}">AJ</button>
        <button class="MainTableButton_o" :style="{background: currentTable['JK_o']}">KJ</button>
        <button class="MainTableButton_o" :style="{background: currentTable['JQ_o']}">QJ</button>
        <button class="MainTableButton_o" :style="{background: currentTable['JJ_o']}">JJ</button>
        <button class="MainTableButton_s" :style="{background: currentTable['JT_s']}">JT</button>
        <button class="MainTableButton_s" :style="{background: currentTable['J9_s']}">J9</button>
        <button class="MainTableButton_s" :style="{background: currentTable['J8_s']}">J8</button>
        <button class="MainTableButton_s" :style="{background: currentTable['J7_s']}">J7</button>
        <button class="MainTableButton_s" :style="{background: currentTable['J6_s']}">J6</button>
        <button class="MainTableButton_s" :style="{background: currentTable['J5_s']}">J5</button>
        <button class="MainTableButton_s" :style="{background: currentTable['J4_s']}">J4</button>
        <button class="MainTableButton_s" :style="{background: currentTable['J3_s']}">J3</button>
        <button class="MainTableButton_s" :style="{background: currentTable['J2_s']}">J2</button>
   </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['TA_o']}">AT</button>
        <button class="MainTableButton_o" :style="{background: currentTable['TK_o']}">KT</button>
        <button class="MainTableButton_o" :style="{background: currentTable['TQ_o']}">QT</button>
        <button class="MainTableButton_o" :style="{background: currentTable['TJ_o']}">JT</button>
        <button class="MainTableButton_o" :style="{background: currentTable['TT_o']}">TT</button>
        <button class="MainTableButton_s" :style="{background: currentTable['T9_s']}">T9</button>
        <button class="MainTableButton_s" :style="{background: currentTable['T8_s']}">T8</button>
        <button class="MainTableButton_s" :style="{background: currentTable['T7_s']}">T7</button>
        <button class="MainTableButton_s" :style="{background: currentTable['T6_s']}">T6</button>
        <button class="MainTableButton_s" :style="{background: currentTable['T5_s']}">T5</button>
        <button class="MainTableButton_s" :style="{background: currentTable['T4_s']}">T4</button>
        <button class="MainTableButton_s" :style="{background: currentTable['T3_s']}">T3</button>
        <button class="MainTableButton_s" :style="{background: currentTable['T2_s']}">T2</button>
   </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['_9A_o']}">A9</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_9K_o']}">K9</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_9Q_o']}">Q9</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_9J_o']}">J9</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_9T_o']}">T9</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_99_o']}">99</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_98_s']}">98</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_97_s']}">97</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_96_s']}">96</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_95_s']}">95</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_94_s']}">94</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_93_s']}">93</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_92_s']}">92</button>
   </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['_8A_o']}">A8</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_8K_o']}">K8</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_8Q_o']}">Q8</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_8J_o']}">J8</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_8T_o']}">T8</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_89_o']}">98</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_88_o']}">88</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_87_s']}">87</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_86_s']}">86</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_85_s']}">85</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_84_s']}">84</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_83_s']}">83</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_82_s']}">82</button>
   </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['_7A_o']}">A7</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_7K_o']}">K7</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_7Q_o']}">Q7</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_7J_o']}">J7</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_7T_o']}">T7</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_79_o']}">97</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_78_o']}">87</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_77_o']}">77</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_76_s']}">76</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_75_s']}">75</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_74_s']}">74</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_73_s']}">73</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_72_s']}">72</button>
  </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['_6A_o']}">A6</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_6K_o']}">K6</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_6Q_o']}">Q6</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_6J_o']}">J6</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_6T_o']}">T6</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_69_o']}">96</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_68_o']}">86</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_67_o']}">76</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_66_o']}">66</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_65_s']}">65</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_64_s']}">64</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_63_s']}">63</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_62_s']}">62</button>
   </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['_5A_o']}">A5</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_5K_o']}">K5</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_5Q_o']}">Q5</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_5J_o']}">J5</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_5T_o']}">T5</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_59_o']}">95</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_58_o']}">85</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_57_o']}">75</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_56_o']}">65</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_55_o']}">55</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_54_s']}">54</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_53_s']}">53</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_52_s']}">52</button>
  </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['_4A_o']}">A4</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_4K_o']}">K4</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_4Q_o']}">Q4</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_4J_o']}">J4</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_4T_o']}">T4</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_49_o']}">94</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_48_o']}">84</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_47_o']}">74</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_46_o']}">64</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_45_o']}">54</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_44_o']}">44</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_43_s']}">43</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_42_s']}">42</button>
   </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['_3A_o']}">A3</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_3K_o']}">K3</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_3Q_o']}">Q3</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_3J_o']}">J3</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_3T_o']}">T3</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_39_o']}">93</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_38_o']}">83</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_37_o']}">73</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_36_o']}">63</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_35_o']}">53</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_34_o']}">43</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_33_o']}">33</button>
        <button class="MainTableButton_s" :style="{background: currentTable['_32_s']}">32</button>
   </div>
    <div>
        <button class="MainTableButton_o" :style="{background: currentTable['_2A_o']}">A2</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_2K_o']}">K2</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_2Q_o']}">Q2</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_2J_o']}">J2</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_2T_o']}">T2</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_29_o']}">92</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_28_o']}">82</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_27_o']}">72</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_26_o']}">62</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_25_o']}">52</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_24_o']}">42</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_23_o']}">32</button>
        <button class="MainTableButton_o" :style="{background: currentTable['_22_o']}">22</button>
   </div> 
  </div>
</template>

<style>
  .mTB{
      display: flex;
      flex-direction: column;
    }

  .MainTableButton_o{
    -webkit-border-radius: 7;
    -moz-border-radius: 7;
    border-radius: 7px;
    font-family: 'Franklin Gothic Medium';
    background: #d0d4d6;
    font-size: 17px;
    background: transparent;
    padding: 16px 10px 16px 10px;
    border: solid #fff 1px;
    text-decoration: none;
    width: 60px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    text-shadow:
    -1px -1px 0 #363636,
     1px -1px 0 #363636,
    -1px  1px 0 #363636,
     1px  1px 0 #363636;
  }
  .MainTableButton_s{
    -webkit-border-radius: 7;
    -moz-border-radius: 7;
    border-radius: 7px;
    font-family: 'Franklin Gothic Medium';
    background: #d0d4d6;
    font-size: 17px;
    background: transparent;
    padding: 16px 10px 16px 10px;
    border: solid #fff 1px;
    text-decoration: none;
    width: 60px;
    font-weight: 700;
    color: rgb(184, 255, 53);
    text-shadow:
    -1px -1px 0 #363636,
     1px -1px 0 #363636,
    -1px  1px 0 #363636,
     1px  1px 0 #363636;
    border-color: rgb(184, 255, 53);
  }
</style>
