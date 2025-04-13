<script>
import {usePockerStore} from "../../../stores/counter"
import { mapActions, mapState } from 'pinia'

export default{
    name: 'PushFoldButtons',
    data(){
        return{
            message: 'Hello Vue!',
            EP_4_5: {
                AA_o:'#f799ac', AK_s: '#f799ac', AQ_s: '#f799ac', AJ_s: '#f799ac', AT_s: '#f799ac', A9_s: '#f799ac', A8_s: '#f799ac', A7_s: '#f799ac', A6_s: '#f799ac', A5_s: '#f799ac', A4_s: '#f799ac', A3_s: '#f799ac', A2_s: '#f799ac',
                    KA_o: '#f799ac', KK_o: '#f799ac', KQ_s: '#f799ac', KJ_s: '#f799ac', KT_s: '#f799ac', K9_s: '#f799ac', K8_s: '#f799ac', K7_s: '#f799ac', K6_s: '#f799ac',
                        QA_o: '#f799ac', QK_o: '#f799ac', QQ_o: '#f799ac', QJ_s: '#f799ac', QT_s: '#f799ac', Q9_s: '#f799ac', Q8_s: '#f799ac',
                            JA_o: '#f799ac', JK_o: '#f799ac', JQ_o: '#f799ac', JJ_o: '#f799ac', JT_s: '#f799ac', J9_s: '#f799ac',
                                TA_o: '#f799ac', TK_o: '#f799ac', TT_o: '#f799ac', T9_s: '#f799ac',
                                    _9A_o: '#f799ac', _99_o: '#f799ac', _98_s: '#f799ac',
                                        _8A_o: '#f799ac', _88_o: '#f799ac',
                                            _7A_o: '#f799ac', _77_o: '#f799ac',
                                                _6A_o: '#f799ac', _66_o: '#f799ac',
                                                    _5A_o: '#f799ac', _55_o: '#f799ac',
                                                        _4A_o: '#f799ac', _44_o: '#f799ac',
                                                            _33_o: '#f799ac',
                                                                _22_o: '#f799ac',
            },
            MP_4_5: {
                AA_o: '#f799ac', AK_s: '#f799ac', AQ_s: '#f799ac', AJ_s: '#f799ac', AT_s: '#f799ac', A9_s: '#f799ac', A8_s: '#f799ac', A7_s: '#f799ac', A6_s: '#f799ac', A5_s: '#f799ac', A4_s: '#f799ac', A3_s: '#f799ac', A2_s: '#f799ac',
                    KA_o: '#f799ac', KK_o: '#f799ac', KQ_s: '#f799ac', KJ_s: '#f799ac', KT_s: '#f799ac', K9_s: '#f799ac', K8_s: '#f799ac', K7_s: '#f799ac', K6_s: '#f799ac', K5_s: '#f799ac', K4_s: '#f799ac',
                        QA_o: '#f799ac', QK_o: '#f799ac', QQ_o: '#f799ac', QJ_s: '#f799ac', QT_s: '#f799ac', Q9_s: '#f799ac', Q8_s: '#f799ac',
                            JA_o: '#f799ac', JK_o: '#f799ac', JQ_o: '#f799ac', JJ_o: '#f799ac', JT_s: '#f799ac', J9_s: '#f799ac', J8_s: '#f799ac',
                                TA_o: '#f799ac', TK_o: '#f799ac', TQ_o: '#f799ac', TJ_o: '#f799ac', TT_o: '#f799ac', T9_s: '#f799ac', T8_s: '#f799ac',
                                    _9A_o: '#f799ac', _9K_o: '#f799ac', _99_o: '#f799ac', _98_s: '#f799ac',
                                        _8A_o: '#f799ac', _88_o: '#f799ac',
                                            _7A_o: '#f799ac', _77_o: '#f799ac',
                                                _6A_o: '#f799ac', _66_o: '#f799ac',
                                                    _5A_o: '#f799ac', _55_o: '#f799ac',
                                                        _4A_o: '#f799ac', _44_o: '#f799ac',
                                                            _3A_o: '#f799ac', _33_o: '#f799ac',
                                                                _2A_o: '#f799ac',_22_o: '#f799ac',
            },
            HJ_4_5: {
                AA_o: '#f799ac', AK_s: '#f799ac', AQ_s: '#f799ac', AJ_s: '#f799ac', AT_s: '#f799ac', A9_s: '#f799ac', A8_s: '#f799ac', A7_s: '#f799ac', A6_s: '#f799ac', A5_s: '#f799ac', A4_s: '#f799ac', A3_s: '#f799ac', A2_s: '#f799ac',
                    KA_o: '#f799ac', KK_o: '#f799ac', KQ_s: '#f799ac', KJ_s: '#f799ac', KT_s: '#f799ac', K9_s: '#f799ac', K8_s: '#f799ac', K7_s: '#f799ac', K6_s: '#f799ac', K5_s: '#f799ac', K4_s: '#f799ac', K3_s: '#f799ac', K2_s: '#f799ac',
                        QA_o: '#f799ac', QK_o: '#f799ac', QQ_o: '#f799ac', QJ_s: '#f799ac', QT_s: '#f799ac', Q9_s: '#f799ac', Q8_s: '#f799ac', Q7_s: '#f799ac', Q6_s: '#f799ac', Q5_s: '#f799ac',
                            JA_o: '#f799ac', JK_o: '#f799ac', JQ_o: '#f799ac', JJ_o: '#f799ac', JT_s: '#f799ac', J9_s: '#f799ac', J8_s: '#f799ac', J7_s: '#f799ac',
                                TA_o: '#f799ac', TK_o: '#f799ac', TQ_o: '#f799ac', TJ_o: '#f799ac', TT_o: '#f799ac', T9_s: '#f799ac', T8_s: '#f799ac', T7_s: '#f799ac',
                                    _9A_o: '#f799ac', _9K_o: '#f799ac', _9Q_o: '#f799ac', _9J_o: '#f799ac', _9T_o: '#f799ac', _99_o: '#f799ac', _98_s: '#f799ac', _97_s: '#f799ac',
                                        _8A_o: '#f799ac', _8K_o: '#f799ac', _88_o: '#f799ac', _87_s: '#f799ac',
                                            _7A_o: '#f799ac', _7K_o: '#f799ac', _77_o: '#f799ac', _76_s: '#f799ac',
                                                _6A_o: '#f799ac', _6K_o: '#f799ac', _66_o: '#f799ac',
                                                    _5A_o: '#f799ac', _55_o: '#f799ac',
                                                        _4A_o: '#f799ac', _44_o: '#f799ac',
                                                            _3A_o: '#f799ac', _33_o: '#f799ac',
                                                                _2A_o: '#f799ac',_22_o: '#f799ac',
            },
            CO_4_5: {
                AA_o: '#f799ac', AK_s: '#f799ac', AQ_s: '#f799ac', AJ_s: '#f799ac', AT_s: '#f799ac', A9_s: '#f799ac', A8_s: '#f799ac', A7_s: '#f799ac', A6_s: '#f799ac', A5_s: '#f799ac', A4_s: '#f799ac', A3_s: '#f799ac', A2_s: '#f799ac',
                    KA_o: '#f799ac', KK_o: '#f799ac', KQ_s: '#f799ac', KJ_s: '#f799ac', KT_s: '#f799ac', K9_s: '#f799ac', K8_s: '#f799ac', K7_s: '#f799ac', K6_s: '#f799ac', K5_s: '#f799ac', K4_s: '#f799ac', K3_s: '#f799ac', K2_s: '#f799ac',
                        QA_o: '#f799ac', QK_o: '#f799ac', QQ_o: '#f799ac', QJ_s: '#f799ac', QT_s: '#f799ac', Q9_s: '#f799ac', Q8_s: '#f799ac', Q7_s: '#f799ac', Q6_s: '#f799ac', Q5_s: '#f799ac', Q4_s: '#f799ac', Q3_s: '#f799ac',
                            JA_o: '#f799ac', JK_o: '#f799ac', JQ_o: '#f799ac', JJ_o: '#f799ac', JT_s: '#f799ac', J9_s: '#f799ac', J8_s: '#f799ac', J7_s: '#f799ac', J6_s: '#f799ac',
                                TA_o: '#f799ac', TK_o: '#f799ac', TQ_o: '#f799ac', TJ_o: '#f799ac', TT_o: '#f799ac', T9_s: '#f799ac', T8_s: '#f799ac', T7_s: '#f799ac', T6_s: '#f799ac',
                                    _9A_o: '#f799ac', _9K_o: '#f799ac', _9Q_o: '#f799ac', _9J_o: '#f799ac', _9T_o: '#f799ac', _99_o: '#f799ac', _98_s: '#f799ac', _97_s: '#f799ac', _96_s: '#f799ac',
                                        _8A_o: '#f799ac', _8K_o: '#f799ac', _8Q_o: '#f799ac', _8J_o: '#f799ac', _88_o: '#f799ac', _87_s: '#f799ac', _86_s: '#f799ac',
                                            _7A_o: '#f799ac', _7K_o: '#f799ac', _77_o: '#f799ac', _76_s: '#f799ac',
                                                _6A_o: '#f799ac', _6K_o: '#f799ac', _66_o: '#f799ac', _65_s: '#f799ac',
                                                    _5A_o: '#f799ac', _5K_o: '#f799ac', _55_o: '#f799ac',
                                                        _4A_o: '#f799ac',  _4K_o: '#f799ac', _44_o: '#f799ac',
                                                            _3A_o: '#f799ac', _33_o: '#f799ac',
                                                                _2A_o: '#f799ac',_22_o: '#f799ac',
            },
            BTN_4_5: {
                AA_o: '#f799ac', AK_s: '#f799ac', AQ_s: '#f799ac', AJ_s: '#f799ac', AT_s: '#f799ac', A9_s: '#f799ac', A8_s: '#f799ac', A7_s: '#f799ac', A6_s: '#f799ac', A5_s: '#f799ac', A4_s: '#f799ac', A3_s: '#f799ac', A2_s: '#f799ac',
                    KA_o: '#f799ac', KK_o: '#f799ac', KQ_s: '#f799ac', KJ_s: '#f799ac', KT_s: '#f799ac', K9_s: '#f799ac', K8_s: '#f799ac', K7_s: '#f799ac', K6_s: '#f799ac', K5_s: '#f799ac', K4_s: '#f799ac', K3_s: '#f799ac', K2_s: '#f799ac',
                        QA_o: '#f799ac', QK_o: '#f799ac', QQ_o: '#f799ac', QJ_s: '#f799ac', QT_s: '#f799ac', Q9_s: '#f799ac', Q8_s: '#f799ac', Q7_s: '#f799ac', Q6_s: '#f799ac', Q5_s: '#f799ac', Q4_s: '#f799ac', Q3_s: '#f799ac', Q2_s: '#f799ac',
                            JA_o: '#f799ac', JK_o: '#f799ac', JQ_o: '#f799ac', JJ_o: '#f799ac', JT_s: '#f799ac', J9_s: '#f799ac', J8_s: '#f799ac', J7_s: '#f799ac', J6_s: '#f799ac', J5_s: '#f799ac', J4_s: '#f799ac', J3_s: '#f799ac',
                                TA_o: '#f799ac', TK_o: '#f799ac', TQ_o: '#f799ac', TJ_o: '#f799ac', TT_o: '#f799ac', T9_s: '#f799ac', T8_s: '#f799ac', T7_s: '#f799ac', T6_s: '#f799ac',
                                    _9A_o: '#f799ac', _9K_o: '#f799ac', _9Q_o: '#f799ac', _9J_o: '#f799ac', _9T_o: '#f799ac', _99_o: '#f799ac', _98_s: '#f799ac', _97_s: '#f799ac', _96_s: '#f799ac',
                                        _8A_o: '#f799ac', _8K_o: '#f799ac', _8Q_o: '#f799ac', _8J_o: '#f799ac', _8T_o: '#f799ac', _89_o: '#f799ac', _88_o: '#f799ac', _87_s: '#f799ac', _86_s: '#f799ac',
                                            _7A_o: '#f799ac', _7K_o: '#f799ac', _7Q_o: '#f799ac', _7J_o: '#f799ac', _77_o: '#f799ac', _76_s: '#f799ac', _75_s: '#f799ac',
                                                _6A_o: '#f799ac', _6K_o: '#f799ac', _6Q_o: '#f799ac', _66_o: '#f799ac', _65_s: '#f799ac',
                                                    _5A_o: '#f799ac', _5K_o: '#f799ac', _5Q_o: '#f799ac', _55_o: '#f799ac', _54_o: '#f799ac',
                                                        _4A_o: '#f799ac',  _4K_o: '#f799ac', _4Q_o: '#f799ac', _44_o: '#f799ac',
                                                            _3A_o: '#f799ac', _3K_o: '#f799ac', _33_o: '#f799ac',
                                                                _2A_o: '#f799ac', _2K_o: '#f799ac', _22_o: '#f799ac',
            },
            SB_4_5: {
                AA_o: '#f799ac', AK_s: '#f799ac', AQ_s: '#f799ac', AJ_s: '#f799ac', AT_s: '#f799ac', A9_s: '#f799ac', A8_s: '#f799ac', A7_s: '#f799ac', A6_s: '#f799ac', A5_s: '#f799ac', A4_s: '#f799ac', A3_s: '#f799ac', A2_s: '#f799ac',
                    KA_o: '#f799ac', KK_o: '#f799ac', KQ_s: '#f799ac', KJ_s: '#f799ac', KT_s: '#f799ac', K9_s: '#f799ac', K8_s: '#f799ac', K7_s: '#f799ac', K6_s: '#f799ac', K5_s: '#f799ac', K4_s: '#f799ac', K3_s: '#f799ac', K2_s: '#f799ac',
                        QA_o: '#f799ac', QK_o: '#f799ac', QQ_o: '#f799ac', QJ_s: '#f799ac', QT_s: '#f799ac', Q9_s: '#f799ac', Q8_s: '#f799ac', Q7_s: '#f799ac', Q6_s: '#f799ac', Q5_s: '#f799ac', Q4_s: '#f799ac', Q3_s: '#f799ac', Q2_s: '#f799ac',
                            JA_o: '#f799ac', JK_o: '#f799ac', JQ_o: '#f799ac', JJ_o: '#f799ac', JT_s: '#f799ac', J9_s: '#f799ac', J8_s: '#f799ac', J7_s: '#f799ac', J6_s: '#f799ac', J5_s: '#f799ac', J4_s: '#f799ac', J3_s: '#f799ac', J2_s: '#f799ac',
                                TA_o: '#f799ac', TK_o: '#f799ac', TQ_o: '#f799ac', TJ_o: '#f799ac', TT_o: '#f799ac', T9_s: '#f799ac', T8_s: '#f799ac', T7_s: '#f799ac', T6_s: '#f799ac', T5_s: '#f799ac', T4_s: '#f799ac', T3_s: '#f799ac', T2_s: '#f799ac',
                                    _9A_o: '#f799ac', _9K_o: '#f799ac', _9Q_o: '#f799ac', _9J_o: '#f799ac', _9T_o: '#f799ac', _99_o: '#f799ac', _98_s: '#f799ac', _97_s: '#f799ac', _96_s: '#f799ac', _95_s: '#f799ac', _94_s: '#f799ac', _93_s: '#f799ac', _92_s: '#f799ac',
                                        _8A_o: '#f799ac', _8K_o: '#f799ac', _8Q_o: '#f799ac', _8J_o: '#f799ac', _8T_o: '#f799ac', _89_o: '#f799ac', _88_o: '#f799ac', _87_s: '#f799ac', _86_s: '#f799ac', _85_s: '#f799ac', _84_s: '#f799ac', _83_s: '#f799ac', _82_s: '#f799ac',
                                            _7A_o: '#f799ac', _7K_o: '#f799ac', _7Q_o: '#f799ac', _7J_o: '#f799ac', _7T_o: '#f799ac', _79_o: '#f799ac', _78_o: '#f799ac', _77_o: '#f799ac', _76_s: '#f799ac', _75_s: '#f799ac', _74_s: '#f799ac', _73_s: '#f799ac',
                                                _6A_o: '#f799ac', _6K_o: '#f799ac', _6Q_o: '#f799ac', _6J_o: '#f799ac', _6T_o: '#f799ac', _69_o: '#f799ac', _68_o: '#f799ac', _67_o: '#f799ac', _66_o: '#f799ac', _65_s: '#f799ac', _64_s: '#f799ac', _63_s: '#f799ac',
                                                    _5A_o: '#f799ac', _5K_o: '#f799ac', _5Q_o: '#f799ac', _5J_o: '#f799ac', _5T_o: '#f799ac', _59_o: '#f799ac', _58_o: '#f799ac', _57_o: '#f799ac', _56_o: '#f799ac', _55_o: '#f799ac', _54_s: '#f799ac', _53_s: '#f799ac',
                                                        _4A_o: '#f799ac',  _4K_o: '#f799ac', _4Q_o: '#f799ac', _4J_o: '#f799ac', _4T_o: '#f799ac', _44_o: '#f799ac', _43_s: '#f799ac',
                                                            _3A_o: '#f799ac', _3K_o: '#f799ac', _3Q_o: '#f799ac', _3J_o: '#f799ac', _3T_o: '#f799ac', _33_o: '#f799ac',
                                                                _2A_o: '#f799ac', _2K_o: '#f799ac', _2Q_o: '#f799ac', _2J_o: '#f799ac', _2T_o: '#f799ac', _22_o: '#f799ac',
            },
            EP_6_7:{
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A7_s: '#f4c2ac', A6_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac', K9_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac', Q9_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac', J9_s: '#f4c2ac',
                                TA_o: '#f4c2ac', TT_o: '#f4c2ac', T9_s: '#f4c2ac',
                                    _9A_o: '#f4c2ac', _99_o: '#f4c2ac',
                                        _8A_o: '#f4c2ac', _88_o: '#f4c2ac',
                                            _77_o: '#f4c2ac',
                                                _66_o: '#f4c2ac',
                                                    _55_o: '#f4c2ac',
                                                        _44_o: '#f4c2ac',
                                                            _33_o: '#f4c2ac',
                                                                _22_o: '#f4c2ac',
            },
            MP_6_7: {
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A7_s: '#f4c2ac', A6_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac', K9_s: '#f4c2ac',  K8_s: '#f4c2ac',  K7_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac', Q9_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JQ_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac', J9_s: '#f4c2ac',
                                TA_o: '#f4c2ac', TK_o: '#f4c2ac', TT_o: '#f4c2ac', T9_s: '#f4c2ac',
                                    _9A_o: '#f4c2ac', _99_o: '#f4c2ac', _98_s: '#f4c2ac',
                                        _8A_o: '#f4c2ac', _88_o: '#f4c2ac',
                                            _7A_o: '#f4c2ac',_77_o: '#f4c2ac',
                                                _6A_o: '#f4c2ac',_66_o: '#f4c2ac',
                                                    _5A_o: '#f4c2ac',_55_o: '#f4c2ac',
                                                        _44_o: '#f4c2ac',
                                                            _33_o: '#f4c2ac',
                                                                _22_o: '#f4c2ac',
            },
            HJ_6_7: {
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A7_s: '#f4c2ac', A6_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac', K9_s: '#f4c2ac',  K8_s: '#f4c2ac',  K7_s: '#f4c2ac', K6_s: '#f4c2ac', K5_s: '#f4c2ac', K4_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac', Q9_s: '#f4c2ac', Q8_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JQ_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac', J9_s: '#f4c2ac', J8_s: '#f4c2ac',
                                TA_o: '#f4c2ac', TK_o: '#f4c2ac', TQ_o: '#f4c2ac', TJ_o: '#f4c2ac', TT_o: '#f4c2ac', T9_s: '#f4c2ac', T8_s: '#f4c2ac',
                                    _9A_o: '#f4c2ac', _9K_o: '#f4c2ac', _99_o: '#f4c2ac', _98_s: '#f4c2ac',
                                        _8A_o: '#f4c2ac', _88_o: '#f4c2ac', _87_s: '#f4c2ac',
                                            _7A_o: '#f4c2ac', _77_o: '#f4c2ac',
                                                _6A_o: '#f4c2ac' ,_66_o: '#f4c2ac',
                                                    _5A_o: '#f4c2ac' ,_55_o: '#f4c2ac',
                                                        _4A_o: '#f4c2ac', _44_o: '#f4c2ac',
                                                            _3A_o: '#f4c2ac', _33_o: '#f4c2ac',
                                                                _2A_o: '#f4c2ac', _22_o: '#f4c2ac',
            },
            CO_6_7: {
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A7_s: '#f4c2ac', A6_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac', K9_s: '#f4c2ac',  K8_s: '#f4c2ac',  K7_s: '#f4c2ac', K6_s: '#f4c2ac', K5_s: '#f4c2ac', K4_s: '#f4c2ac',  K3_s: '#f4c2ac',  K2_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac', Q9_s: '#f4c2ac', Q8_s: '#f4c2ac', Q7_s: '#f4c2ac', Q6_s: '#f4c2ac', Q5_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JQ_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac', J9_s: '#f4c2ac', J8_s: '#f4c2ac', J7_s: '#f4c2ac',
                                TA_o: '#f4c2ac', TK_o: '#f4c2ac', TQ_o: '#f4c2ac', TJ_o: '#f4c2ac', TT_o: '#f4c2ac', T9_s: '#f4c2ac', T8_s: '#f4c2ac', T7_s: '#f4c2ac',
                                    _9A_o: '#f4c2ac', _9K_o: '#f4c2ac', _9Q_o: '#f4c2ac', _9J_o: '#f4c2ac', _9T_o: '#f4c2ac', _99_o: '#f4c2ac', _98_s: '#f4c2ac', _97_s: '#f4c2ac',
                                        _8A_o: '#f4c2ac', _8K_o: '#f4c2ac', _88_o: '#f4c2ac', _87_s: '#f4c2ac', _86_s: '#f4c2ac',
                                            _7A_o: '#f4c2ac', _7K_o: '#f4c2ac', _77_o: '#f4c2ac', _76_s: '#f4c2ac',
                                                _6A_o: '#f4c2ac' , _66_o: '#f4c2ac', _65_s: '#f4c2ac',
                                                    _5A_o: '#f4c2ac' ,_55_o: '#f4c2ac',
                                                        _4A_o: '#f4c2ac', _44_o: '#f4c2ac',
                                                            _3A_o: '#f4c2ac', _33_o: '#f4c2ac',
                                                                _2A_o: '#f4c2ac', _22_o: '#f4c2ac',
            },
            BTN_6_7:{
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A7_s: '#f4c2ac', A6_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac', K9_s: '#f4c2ac',  K8_s: '#f4c2ac',  K7_s: '#f4c2ac', K6_s: '#f4c2ac', K5_s: '#f4c2ac', K4_s: '#f4c2ac',  K3_s: '#f4c2ac',  K2_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac', Q9_s: '#f4c2ac', Q8_s: '#f4c2ac', Q7_s: '#f4c2ac', Q6_s: '#f4c2ac', Q5_s: '#f4c2ac', Q4_s: '#f4c2ac', Q3_s: '#f4c2ac', Q2_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JQ_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac', J9_s: '#f4c2ac', J8_s: '#f4c2ac', J7_s: '#f4c2ac', J6_s: '#f4c2ac',
                                TA_o: '#f4c2ac', TK_o: '#f4c2ac', TQ_o: '#f4c2ac', TJ_o: '#f4c2ac', TT_o: '#f4c2ac', T9_s: '#f4c2ac', T8_s: '#f4c2ac', T7_s: '#f4c2ac', T6_s: '#f4c2ac',
                                    _9A_o: '#f4c2ac', _9K_o: '#f4c2ac', _9Q_o: '#f4c2ac', _9J_o: '#f4c2ac', _9T_o: '#f4c2ac', _99_o: '#f4c2ac', _98_s: '#f4c2ac', _97_s: '#f4c2ac', _96_s: '#f4c2ac',
                                        _8A_o: '#f4c2ac', _8K_o: '#f4c2ac', _8Q_o: '#f4c2ac', _88_o: '#f4c2ac', _87_s: '#f4c2ac', _86_s: '#f4c2ac',
                                            _7A_o: '#f4c2ac', _7K_o: '#f4c2ac', _77_o: '#f4c2ac', _76_s: '#f4c2ac', _75_s: '#f4c2ac',
                                                _6A_o: '#f4c2ac' , _6K_o: '#f4c2ac' , _66_o: '#f4c2ac', _65_s: '#f4c2ac',
                                                    _5A_o: '#f4c2ac', _5K_o: '#f4c2ac', _55_o: '#f4c2ac', _54_o: '#f4c2ac',
                                                        _4A_o: '#f4c2ac', _4K_o: '#f4c2ac', _44_o: '#f4c2ac',
                                                            _3A_o: '#f4c2ac', _3K_o: '#f4c2ac', _33_o: '#f4c2ac',
                                                                _2A_o: '#f4c2ac', _2K_o: '#f4c2ac', _22_o: '#f4c2ac',
            },
            SB_6_7: {
                AA_o: '#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A7_s: '#f4c2ac', A6_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac', K9_s: '#f4c2ac', K8_s: '#f4c2ac', K7_s: '#f4c2ac', K6_s: '#f4c2ac', K5_s: '#f4c2ac', K4_s: '#f4c2ac', K3_s: '#f4c2ac', K2_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac', Q9_s: '#f4c2ac', Q8_s: '#f4c2ac', Q7_s: '#f4c2ac', Q6_s: '#f4c2ac', Q5_s: '#f4c2ac', Q4_s: '#f4c2ac', Q3_s: '#f4c2ac', Q2_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JQ_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac', J9_s: '#f4c2ac', J8_s: '#f4c2ac', J7_s: '#f4c2ac', J6_s: '#f4c2ac', J5_s: '#f4c2ac', J4_s: '#f4c2ac', J3_s: '#f4c2ac', J2_s: '#f4c2ac',
                                TA_o: '#f4c2ac', TK_o: '#f4c2ac', TQ_o: '#f4c2ac', TJ_o: '#f4c2ac', TT_o: '#f4c2ac', T9_s: '#f4c2ac', T8_s: '#f4c2ac', T7_s: '#f4c2ac', T6_s: '#f4c2ac', T5_s: '#f4c2ac', T4_s: '#f4c2ac', T3_s: '#f4c2ac', T2_s: '#f4c2ac',
                                    _9A_o: '#f4c2ac', _9K_o: '#f4c2ac', _9Q_o: '#f4c2ac', _9J_o: '#f4c2ac', _9T_o: '#f4c2ac', _99_o: '#f4c2ac', _98_s: '#f4c2ac', _97_s: '#f4c2ac', _96_s: '#f4c2ac', _95_s: '#f4c2ac', _94_s: '#f4c2ac', _93_s: '#f4c2ac', _92_s: '#f4c2ac',
                                        _8A_o: '#f4c2ac', _8K_o: '#f4c2ac', _8Q_o: '#f4c2ac', _8J_o: '#f4c2ac', _8T_o: '#f4c2ac', _89_o: '#f4c2ac', _88_o: '#f4c2ac', _87_s: '#f4c2ac', _86_s: '#f4c2ac', _85_s: '#f4c2ac', _84_s: '#f4c2ac',
                                            _7A_o: '#f4c2ac', _7K_o: '#f4c2ac', _7Q_o: '#f4c2ac', _7J_o: '#f4c2ac', _7T_o: '#f4c2ac', _79_o: '#f4c2ac', _78_o: '#f4c2ac', _77_o: '#f4c2ac', _76_s: '#f4c2ac', _75_s: '#f4c2ac', _74_s: '#f4c2ac',
                                                _6A_o: '#f4c2ac', _6K_o: '#f4c2ac', _6Q_o: '#f4c2ac', _6J_o: '#f4c2ac', _6T_o: '#f4c2ac', _69_o: '#f4c2ac', _68_o: '#f4c2ac', _67_o: '#f4c2ac', _66_o: '#f4c2ac', _65_s: '#f4c2ac', _64_s: '#f4c2ac',
                                                    _5A_o: '#f4c2ac', _5K_o: '#f4c2ac', _5Q_o: '#f4c2ac', _5J_o: '#f4c2ac', _5T_o: '#f4c2ac', _55_o: '#f4c2ac', _54_s: '#f4c2ac', _53_s: '#f4c2ac',
                                                        _4A_o: '#f4c2ac',  _4K_o: '#f4c2ac', _4Q_o: '#f4c2ac', _4J_o: '#f4c2ac', _44_o: '#f4c2ac', _43_s: '#f4c2ac',
                                                            _3A_o: '#f4c2ac', _3K_o: '#f4c2ac', _3Q_o: '#f4c2ac', _3J_o: '#f4c2ac', _33_o: '#f4c2ac',
                                                                _2A_o: '#f4c2ac', _2K_o: '#f4c2ac', _2Q_o: '#f4c2ac', _2J_o: '#f4c2ac', _22_o: '#f4c2ac',
            },
            EP_8_9: {
                AA_o:'#ead26b', AK_s: '#ead26b', AQ_s: '#ead26b', AJ_s: '#ead26b', AT_s: '#ead26b', A9_s: '#ead26b', A8_s: '#ead26b', A7_s: '#ead26b',
                    KA_o: '#ead26b', KK_o: '#ead26b', KQ_s: '#ead26b', KJ_s: '#ead26b', KT_s: '#ead26b', K9_s: '#ead26b',
                        QA_o: '#ead26b', QK_o: '#ead26b', QQ_o: '#ead26b', QJ_s: '#ead26b', QT_s: '#ead26b', Q9_s: '#ead26b',
                            JA_o: '#ead26b', JJ_o: '#ead26b', JT_s: '#ead26b', J9_s: '#ead26b',
                                TA_o: '#ead26b', TT_o: '#ead26b', T9_s: '#ead26b',
                                    _99_o: '#ead26b',
                                        _88_o: '#ead26b',
                                            _77_o: '#ead26b',
                                                _66_o: '#ead26b',
                                                    _55_o: '#ead26b',
                                                        _44_o: '#ead26b',
                                                            _33_o: '#ead26b',
            },
            MP_8_9: {
                AA_o:'#ead26b', AK_s: '#ead26b', AQ_s: '#ead26b', AJ_s: '#ead26b', AT_s: '#ead26b', A9_s: '#ead26b', A8_s: '#ead26b', A7_s: '#ead26b', A6_s: '#ead26b',A5_s: '#ead26b',A4_s: '#ead26b',A3_s: '#ead26b',A2_s: '#ead26b',
                    KA_o: '#ead26b', KK_o: '#ead26b', KQ_s: '#ead26b', KJ_s: '#ead26b', KT_s: '#ead26b', K9_s: '#ead26b',
                        QA_o: '#ead26b', QK_o: '#ead26b', QQ_o: '#ead26b', QJ_s: '#ead26b', QT_s: '#ead26b', Q9_s: '#ead26b',
                            JA_o: '#ead26b', JK_o: '#ead26b', JJ_o: '#ead26b', JT_s: '#ead26b', J9_s: '#ead26b',
                                TA_o: '#ead26b', TT_o: '#ead26b', T9_s: '#ead26b',
                                    _9A_o: '#ead26b', _99_o: '#ead26b', _98_s: '#ead26b',
                                        _8A_o: '#ead26b',_88_o: '#ead26b',
                                            _77_o: '#ead26b',
                                                _66_o: '#ead26b',
                                                    _55_o: '#ead26b',
                                                        _44_o: '#ead26b',
                                                            _33_o: '#ead26b',
                                                                _22_o: '#ead26b',
            },
            HK_8_9: {
                AA_o:'#ead26b', AK_s: '#ead26b', AQ_s: '#ead26b', AJ_s: '#ead26b', AT_s: '#ead26b', A9_s: '#ead26b', A8_s: '#ead26b', A7_s: '#ead26b', A6_s: '#ead26b',A5_s: '#ead26b',A4_s: '#ead26b',A3_s: '#ead26b',A2_s: '#ead26b',
                    KA_o: '#ead26b', KK_o: '#ead26b', KQ_s: '#ead26b', KJ_s: '#ead26b', KT_s: '#ead26b', K9_s: '#ead26b',  K8_s: '#ead26b',  K7_s: '#ead26b',  K6_s: '#ead26b',
                        QA_o: '#ead26b', QK_o: '#ead26b', QQ_o: '#ead26b', QJ_s: '#ead26b', QT_s: '#ead26b', Q9_s: '#ead26b', Q8_s: '#ead26b',
                            JA_o: '#ead26b', JK_o: '#ead26b', JQ_o: '#ead26b', JJ_o: '#ead26b', JT_s: '#ead26b', J9_s: '#ead26b', J8_s: '#ead26b',
                                TA_o: '#ead26b', TK_o: '#ead26b', TQ_o: '#ead26b', TJ_o: '#ead26b', TT_o: '#ead26b', T9_s: '#ead26b', T8_s: '#ead26b',
                                    _9A_o: '#ead26b', _99_o: '#ead26b', _98_s: '#ead26b',
                                        _8A_o: '#ead26b', _88_o: '#ead26b', _87_s: '#ead26b',
                                            _7A_o: '#ead26b',_77_o: '#ead26b',
                                                _6A_o: '#ead26b',_66_o: '#ead26b',
                                                    _5A_o: '#ead26b',_55_o: '#ead26b',
                                                        _4A_o: '#ead26b',_44_o: '#ead26b',
                                                            _3A_o: '#ead26b',_33_o: '#ead26b',
                                                                _2A_o: '#ead26b',_22_o: '#ead26b',
            },
            CO_8_9: {
                AA_o:'#ead26b', AK_s: '#ead26b', AQ_s: '#ead26b', AJ_s: '#ead26b', AT_s: '#ead26b', A9_s: '#ead26b', A8_s: '#ead26b', A7_s: '#ead26b', A6_s: '#ead26b',A5_s: '#ead26b',A4_s: '#ead26b',A3_s: '#ead26b',A2_s: '#ead26b',
                    KA_o: '#ead26b', KK_o: '#ead26b', KQ_s: '#ead26b', KJ_s: '#ead26b', KT_s: '#ead26b', K9_s: '#ead26b',  K8_s: '#ead26b',  K7_s: '#ead26b',  K6_s: '#ead26b', K5_s: '#ead26b', K4_s: '#ead26b',
                        QA_o: '#ead26b', QK_o: '#ead26b', QQ_o: '#ead26b', QJ_s: '#ead26b', QT_s: '#ead26b', Q9_s: '#ead26b', Q8_s: '#ead26b',
                            JA_o: '#ead26b', JK_o: '#ead26b', JQ_o: '#ead26b', JJ_o: '#ead26b', JT_s: '#ead26b', J9_s: '#ead26b', J8_s: '#ead26b',
                                TA_o: '#ead26b', TK_o: '#ead26b', TQ_o: '#ead26b', TJ_o: '#ead26b', TT_o: '#ead26b', T9_s: '#ead26b', T8_s: '#ead26b',
                                    _9A_o: '#ead26b', _9K_o: '#ead26b', _99_o: '#ead26b', _98_s: '#ead26b', _97_s: '#ead26b',
                                        _8A_o: '#ead26b', _88_o: '#ead26b', _87_s: '#ead26b',
                                            _7A_o: '#ead26b', _77_o: '#ead26b', _76_s: '#ead26b',
                                                _6A_o: '#ead26b',_66_o: '#ead26b',
                                                    _5A_o: '#ead26b',_55_o: '#ead26b',
                                                        _4A_o: '#ead26b',_44_o: '#ead26b',
                                                            _3A_o: '#ead26b',_33_o: '#ead26b',
                                                                _2A_o: '#ead26b',_22_o: '#ead26b',
            },
            BTN_8_9: {
                AA_o:'#ead26b', AK_s: '#ead26b', AQ_s: '#ead26b', AJ_s: '#ead26b', AT_s: '#ead26b', A9_s: '#ead26b', A8_s: '#ead26b', A7_s: '#ead26b', A6_s: '#ead26b',A5_s: '#ead26b',A4_s: '#ead26b',A3_s: '#ead26b',A2_s: '#ead26b',
                    KA_o: '#ead26b', KK_o: '#ead26b', KQ_s: '#ead26b', KJ_s: '#ead26b', KT_s: '#ead26b', K9_s: '#ead26b',  K8_s: '#ead26b',  K7_s: '#ead26b',  K6_s: '#ead26b', K5_s: '#ead26b', K4_s: '#ead26b',K3_s: '#ead26b', K2_s: '#ead26b',
                        QA_o: '#ead26b', QK_o: '#ead26b', QQ_o: '#ead26b', QJ_s: '#ead26b', QT_s: '#ead26b', Q9_s: '#ead26b', Q8_s: '#ead26b', Q7_s: '#ead26b', Q6_s: '#ead26b', Q5_s: '#ead26b',
                            JA_o: '#ead26b', JK_o: '#ead26b', JQ_o: '#ead26b', JJ_o: '#ead26b', JT_s: '#ead26b', J9_s: '#ead26b', J8_s: '#ead26b', J7_s: '#ead26b',
                                TA_o: '#ead26b', TK_o: '#ead26b', TQ_o: '#ead26b', TJ_o: '#ead26b', TT_o: '#ead26b', T9_s: '#ead26b', T8_s: '#ead26b', T7_s: '#ead26b',
                                    _9A_o: '#ead26b', _9K_o: '#ead26b', _9Q_o: '#ead26b', _9J_o: '#ead26b', _9T_o: '#ead26b', _99_o: '#ead26b', _98_s: '#ead26b', _97_s: '#ead26b', _96_s: '#ead26b',
                                        _8A_o: '#ead26b', _8K_o: '#ead26b', _88_o: '#ead26b', _87_s: '#ead26b', _86_s: '#ead26b',
                                            _7A_o: '#ead26b', _7K_o: '#ead26b', _77_o: '#ead26b', _76_s: '#ead26b', _75_s: '#ead26b',
                                                _6A_o: '#ead26b', _6K_o: '#ead26b', _66_o: '#ead26b', _65_s: '#ead26b',
                                                    _5A_o: '#ead26b', _55_o: '#ead26b', _54_s: '#ead26b',
                                                        _4A_o: '#ead26b',_44_o: '#ead26b',
                                                            _3A_o: '#ead26b',_33_o: '#ead26b',
                                                                _2A_o: '#ead26b',_22_o: '#ead26b',
            },
            SB_8_9: {
                AA_o:'#ead26b', AK_s: '#ead26b', AQ_s: '#ead26b', AJ_s: '#ead26b', AT_s: '#ead26b', A9_s: '#ead26b', A8_s: '#ead26b', A7_s: '#ead26b', A6_s: '#ead26b',A5_s: '#ead26b',A4_s: '#ead26b',A3_s: '#ead26b',A2_s: '#ead26b',
                    KA_o: '#ead26b', KK_o: '#ead26b', KQ_s: '#ead26b', KJ_s: '#ead26b', KT_s: '#ead26b', K9_s: '#ead26b',  K8_s: '#ead26b',  K7_s: '#ead26b',  K6_s: '#ead26b', K5_s: '#ead26b', K4_s: '#ead26b',K3_s: '#ead26b', K2_s: '#ead26b',
                        QA_o: '#ead26b', QK_o: '#ead26b', QQ_o: '#ead26b', QJ_s: '#ead26b', QT_s: '#ead26b', Q9_s: '#ead26b', Q8_s: '#ead26b', Q7_s: '#ead26b', Q6_s: '#ead26b', Q5_s: '#ead26b', Q4_s: '#ead26b', Q3_s: '#ead26b', Q2_s: '#ead26b',
                            JA_o: '#ead26b', JK_o: '#ead26b', JQ_o: '#ead26b', JJ_o: '#ead26b', JT_s: '#ead26b', J9_s: '#ead26b', J8_s: '#ead26b', J7_s: '#ead26b', J6_s: '#ead26b', J5_s: '#ead26b', J4_s: '#ead26b', J3_s: '#ead26b', J2_s: '#ead26b',
                                TA_o: '#ead26b', TK_o: '#ead26b', TQ_o: '#ead26b', TJ_o: '#ead26b', TT_o: '#ead26b', T9_s: '#ead26b', T8_s: '#ead26b', T7_s: '#ead26b', T6_s: '#ead26b', T5_s: '#ead26b', T4_s: '#ead26b', T3_s: '#ead26b', T2_s: '#ead26b',
                                    _9A_o: '#ead26b', _9K_o: '#ead26b', _9Q_o: '#ead26b', _9J_o: '#ead26b', _9T_o: '#ead26b', _99_o: '#ead26b', _98_s: '#ead26b', _97_s: '#ead26b', _96_s: '#ead26b', _95_s: '#ead26b', _94_s: '#ead26b',
                                        _8A_o: '#ead26b', _8K_o: '#ead26b', _8Q_o: '#ead26b', _8J_o: '#ead26b', _8T_o: '#ead26b', _89_o: '#ead26b', _88_o: '#ead26b', _87_s: '#ead26b', _86_s: '#ead26b', _85_s: '#ead26b', _84_s: '#ead26b',
                                            _7A_o: '#ead26b', _7K_o: '#ead26b', _7Q_o: '#ead26b', _7J_o: '#ead26b', _7T_o: '#ead26b', _79_o: '#ead26b', _78_o: '#ead26b', _77_o: '#ead26b', _76_s: '#ead26b', _75_s: '#ead26b', _74_s: '#ead26b',
                                                _6A_o: '#ead26b', _6K_o: '#ead26b', _6Q_o: '#ead26b', _6J_o: '#ead26b', _66_o: '#ead26b', _65_s: '#ead26b', _64_s: '#ead26b',
                                                    _5A_o: '#ead26b', _5K_o: '#ead26b', _5Q_o: '#ead26b', _5J_o: '#ead26b', _55_o: '#ead26b', _54_s: '#ead26b', _53_s: '#ead26b',
                                                        _4A_o: '#ead26b', _4K_o: '#ead26b', _4Q_o: '#ead26b', _44_o: '#ead26b', _43_s: '#ead26b',
                                                            _3A_o: '#ead26b', _3K_o: '#ead26b', _3Q_o: '#ead26b', _33_o: '#ead26b',
                                                                _2A_o: '#ead26b', _2K_o: '#ead26b', _2Q_o: '#ead26b',_22_o: '#ead26b',
            },
            EP_10_11: {
                AA_o:'#51cbb0', AK_s: '#51cbb0', AQ_s: '#51cbb0', AJ_s: '#51cbb0', AT_s: '#51cbb0', A9_s: '#51cbb0',
                    KA_o: '#51cbb0', KK_o: '#51cbb0', KQ_s: '#51cbb0', KJ_s: '#51cbb0', KT_s: '#51cbb0',
                        QA_o: '#51cbb0', QK_o: '#51cbb0', QQ_o: '#51cbb0', QJ_s: '#51cbb0', QT_s: '#51cbb0',
                            JA_o: '#51cbb0', JJ_o: '#51cbb0', JT_s: '#51cbb0',
                                TT_o: '#51cbb0',
                                    _99_o: '#51cbb0',
                                        _88_o: '#51cbb0',
                                            _77_o: '#51cbb0',
                                                _66_o: '#51cbb0',
                                                    _55_o: '#51cbb0',
            },
            MP_10_11: {
                AA_o:'#51cbb0', AK_s: '#51cbb0', AQ_s: '#51cbb0', AJ_s: '#51cbb0', AT_s: '#51cbb0', A9_s: '#51cbb0', A8_s: '#51cbb0', A7_s: '#51cbb0', A5_s: '#51cbb0',
                    KA_o: '#51cbb0', KK_o: '#51cbb0', KQ_s: '#51cbb0', KJ_s: '#51cbb0', KT_s: '#51cbb0', K9_s: '#51cbb0',
                        QA_o: '#51cbb0', QK_o: '#51cbb0', QQ_o: '#51cbb0', QJ_s: '#51cbb0', QT_s: '#51cbb0', Q9_s: '#51cbb0',
                            JA_o: '#51cbb0', JJ_o: '#51cbb0', JT_s: '#51cbb0', J9_s: '#51cbb0',
                                TA_o: '#51cbb0', TT_o: '#51cbb0', T9_s: '#51cbb0',
                                    _99_o: '#51cbb0',
                                        _88_o: '#51cbb0',
                                            _77_o: '#51cbb0',
                                                _66_o: '#51cbb0',
                                                    _55_o: '#51cbb0',
                                                        _44_o: '#51cbb0',
                                                            _33_o: '#51cbb0',
            },
            HJ_10_11: {
                AA_o:'#51cbb0', AK_s: '#51cbb0', AQ_s: '#51cbb0', AJ_s: '#51cbb0', AT_s: '#51cbb0', A9_s: '#51cbb0', A8_s: '#51cbb0', A7_s: '#51cbb0', A6_s: '#51cbb0', A5_s: '#51cbb0',A4_s: '#51cbb0',A3_s: '#51cbb0',A2_s: '#51cbb0',
                    KA_o: '#51cbb0', KK_o: '#51cbb0', KQ_s: '#51cbb0', KJ_s: '#51cbb0', KT_s: '#51cbb0', K9_s: '#51cbb0',
                        QA_o: '#51cbb0', QK_o: '#51cbb0', QQ_o: '#51cbb0', QJ_s: '#51cbb0', QT_s: '#51cbb0', Q9_s: '#51cbb0',
                            JA_o: '#51cbb0', JK_o: '#51cbb0',JQ_o: '#51cbb0', JJ_o: '#51cbb0', JT_s: '#51cbb0', J9_s: '#51cbb0',
                                TA_o: '#51cbb0', TK_o: '#51cbb0', TT_o: '#51cbb0', T9_s: '#51cbb0', T8_s: '#51cbb0',
                                    _9A_o: '#51cbb0', _99_o: '#51cbb0', _98_s: '#51cbb0',
                                        _8A_o: '#51cbb0',_88_o: '#51cbb0',
                                            _7A_o: '#51cbb0',_77_o: '#51cbb0',
                                                _66_o: '#51cbb0',
                                                    _5A_o: '#51cbb0', _55_o: '#51cbb0',
                                                        _44_o: '#51cbb0',
                                                            _33_o: '#51cbb0',
                                                                _22_o: '#51cbb0',
            },
            CO_10_11: {
                AA_o:'#51cbb0', AK_s: '#51cbb0', AQ_s: '#51cbb0', AJ_s: '#51cbb0', AT_s: '#51cbb0', A9_s: '#51cbb0', A8_s: '#51cbb0', A7_s: '#51cbb0', A6_s: '#51cbb0', A5_s: '#51cbb0',A4_s: '#51cbb0',A3_s: '#51cbb0',A2_s: '#51cbb0',
                    KA_o: '#51cbb0', KK_o: '#51cbb0', KQ_s: '#51cbb0', KJ_s: '#51cbb0', KT_s: '#51cbb0', K9_s: '#51cbb0', K8_s: '#51cbb0', K7_s: '#51cbb0', K6_s: '#51cbb0',
                        QA_o: '#51cbb0', QK_o: '#51cbb0', QQ_o: '#51cbb0', QJ_s: '#51cbb0', QT_s: '#51cbb0', Q9_s: '#51cbb0', Q8_s: '#51cbb0',
                            JA_o: '#51cbb0', JK_o: '#51cbb0',JQ_o: '#51cbb0', JJ_o: '#51cbb0', JT_s: '#51cbb0', J9_s: '#51cbb0', J8_s: '#51cbb0',
                                TA_o: '#51cbb0', TK_o: '#51cbb0', TQ_o: '#51cbb0', TJ_o: '#51cbb0', TT_o: '#51cbb0', T9_s: '#51cbb0', T8_s: '#51cbb0',
                                    _9A_o: '#51cbb0', _99_o: '#51cbb0', _98_s: '#51cbb0', _97_s: '#51cbb0',
                                        _8A_o: '#51cbb0', _88_o: '#51cbb0', _87_s: '#51cbb0',
                                            _7A_o: '#51cbb0', _77_o: '#51cbb0', _76_s: '#51cbb0',
                                                _6A_o: '#51cbb0',_66_o: '#51cbb0',
                                                    _5A_o: '#51cbb0', _55_o: '#51cbb0',
                                                        _4A_o: '#51cbb0',_44_o: '#51cbb0',
                                                            _3A_o: '#51cbb0',_33_o: '#51cbb0',
                                                                _2A_o: '#51cbb0',_22_o: '#51cbb0',
            },
            BTN_10_11: {
                AA_o:'#51cbb0', AK_s: '#51cbb0', AQ_s: '#51cbb0', AJ_s: '#51cbb0', AT_s: '#51cbb0', A9_s: '#51cbb0', A8_s: '#51cbb0', A7_s: '#51cbb0', A6_s: '#51cbb0', A5_s: '#51cbb0',A4_s: '#51cbb0',A3_s: '#51cbb0',A2_s: '#51cbb0',
                    KA_o: '#51cbb0', KK_o: '#51cbb0', KQ_s: '#51cbb0', KJ_s: '#51cbb0', KT_s: '#51cbb0', K9_s: '#51cbb0', K8_s: '#51cbb0', K7_s: '#51cbb0', K6_s: '#51cbb0', K5_s: '#51cbb0', K4_s: '#51cbb0', K3_s: '#51cbb0', K2_s: '#51cbb0',
                        QA_o: '#51cbb0', QK_o: '#51cbb0', QQ_o: '#51cbb0', QJ_s: '#51cbb0', QT_s: '#51cbb0', Q9_s: '#51cbb0', Q8_s: '#51cbb0', Q7_s: '#51cbb0', Q6_s: '#51cbb0',
                            JA_o: '#51cbb0', JK_o: '#51cbb0',JQ_o: '#51cbb0', JJ_o: '#51cbb0', JT_s: '#51cbb0', J9_s: '#51cbb0', J8_s: '#51cbb0', J7_s: '#51cbb0',
                                TA_o: '#51cbb0', TK_o: '#51cbb0', TQ_o: '#51cbb0', TJ_o: '#51cbb0', TT_o: '#51cbb0', T9_s: '#51cbb0', T8_s: '#51cbb0', T7_s: '#51cbb0',
                                    _9A_o: '#51cbb0', _9K_o: '#51cbb0', _99_o: '#51cbb0', _98_s: '#51cbb0', _97_s: '#51cbb0',
                                        _8A_o: '#51cbb0', _8K_o: '#51cbb0', _88_o: '#51cbb0', _87_s: '#51cbb0', _86_s: '#51cbb0',
                                            _7A_o: '#51cbb0', _77_o: '#51cbb0', _76_s: '#51cbb0',
                                                _6A_o: '#51cbb0',_66_o: '#51cbb0',
                                                    _5A_o: '#51cbb0', _55_o: '#51cbb0',
                                                        _4A_o: '#51cbb0',_44_o: '#51cbb0',
                                                            _3A_o: '#51cbb0',_33_o: '#51cbb0',
                                                                _2A_o: '#51cbb0',_22_o: '#51cbb0',
            },
            SB_10_11: {
                AA_o:'#51cbb0', AK_s: '#51cbb0', AQ_s: '#51cbb0', AJ_s: '#51cbb0', AT_s: '#51cbb0', A9_s: '#51cbb0', A8_s: '#51cbb0', A7_s: '#51cbb0', A6_s: '#51cbb0', A5_s: '#51cbb0',A4_s: '#51cbb0',A3_s: '#51cbb0',A2_s: '#51cbb0',
                    KA_o: '#51cbb0', KK_o: '#51cbb0', KQ_s: '#51cbb0', KJ_s: '#51cbb0', KT_s: '#51cbb0', K9_s: '#51cbb0', K8_s: '#51cbb0', K7_s: '#51cbb0', K6_s: '#51cbb0', K5_s: '#51cbb0', K4_s: '#51cbb0', K3_s: '#51cbb0', K2_s: '#51cbb0',
                        QA_o: '#51cbb0', QK_o: '#51cbb0', QQ_o: '#51cbb0', QJ_s: '#51cbb0', QT_s: '#51cbb0', Q9_s: '#51cbb0', Q8_s: '#51cbb0', Q7_s: '#51cbb0', Q6_s: '#51cbb0', Q5_s: '#51cbb0', Q4_s: '#51cbb0', Q3_s: '#51cbb0', Q2_s: '#51cbb0',
                            JA_o: '#51cbb0', JK_o: '#51cbb0',JQ_o: '#51cbb0', JJ_o: '#51cbb0', JT_s: '#51cbb0', J9_s: '#51cbb0', J8_s: '#51cbb0', J7_s: '#51cbb0', J6_s: '#51cbb0', J5_s: '#51cbb0', J4_s: '#51cbb0', J3_s: '#51cbb0', J2_s: '#51cbb0',
                                TA_o: '#51cbb0', TK_o: '#51cbb0', TQ_o: '#51cbb0', TJ_o: '#51cbb0', TT_o: '#51cbb0', T9_s: '#51cbb0', T8_s: '#51cbb0', T7_s: '#51cbb0', T6_s: '#51cbb0', T5_s: '#51cbb0', T4_s: '#51cbb0',
                                    _9A_o: '#51cbb0', _9K_o: '#51cbb0', _9Q_o: '#51cbb0', _9J_o: '#51cbb0', _9T_o: '#51cbb0', _99_o: '#51cbb0', _98_s: '#51cbb0', _97_s: '#51cbb0', _96_s: '#51cbb0', _95_s: '#51cbb0',
                                        _8A_o: '#51cbb0', _8K_o: '#51cbb0', _8Q_o: '#51cbb0', _8J_o: '#51cbb0', _8T_o: '#51cbb0', _89_o: '#51cbb0', _88_o: '#51cbb0', _87_s: '#51cbb0', _86_s: '#51cbb0', _85_s: '#51cbb0',
                                            _7A_o: '#51cbb0', _7K_o: '#51cbb0', _7Q_o: '#51cbb0', _7J_o: '#51cbb0', _77_o: '#51cbb0', _76_s: '#51cbb0', _75_s: '#51cbb0', _74_s: '#51cbb0',
                                                _6A_o: '#51cbb0', _6K_o: '#51cbb0',  _6Q_o: '#51cbb0', _66_o: '#51cbb0', _65_s: '#51cbb0', _64_s: '#51cbb0',
                                                    _5A_o: '#51cbb0', _5K_o: '#51cbb0',  _5Q_o: '#51cbb0', _55_o: '#51cbb0', _54_s: '#51cbb0', _53_s: '#51cbb0',
                                                        _4A_o: '#51cbb0', _4K_o: '#51cbb0',  _4Q_o: '#51cbb0', _44_o: '#51cbb0', _43_s: '#51cbb0',
                                                            _3A_o: '#51cbb0', _3K_o: '#51cbb0',  _3Q_o: '#51cbb0', _33_o: '#51cbb0',
                                                                _2A_o: '#51cbb0', _2K_o: '#51cbb0',  _2Q_o: '#51cbb0', _22_o: '#51cbb0',
            },
            EP_12_13: {
                AA_o:'#99abf8', AK_s: '#99abf8', AQ_s: '#99abf8', AJ_s: '#99abf8', AT_s: '#99abf8',
                    KA_o: '#99abf8', KK_o: '#99abf8', KQ_s: '#99abf8', KJ_s: '#99abf8', KT_s: '#99abf8',
                        QA_o: '#99abf8', QQ_o: '#99abf8', QJ_s: '#99abf8', QT_s: '#99abf8',
                            JA_o: '#99abf8', JJ_o: '#99abf8', JT_s: '#99abf8',
                                TT_o: '#99abf8',
                                    _99_o: '#99abf8',
                                        _88_o: '#99abf8',
                                            _77_o: '#99abf8',
            },
            MP_12_13: {
                AA_o:'#99abf8', AK_s: '#99abf8', AQ_s: '#99abf8', AJ_s: '#99abf8', AT_s: '#99abf8', A9_s: '#99abf8', A8_s: '#99abf8',
                    KA_o: '#99abf8', KK_o: '#99abf8', KQ_s: '#99abf8', KJ_s: '#99abf8', KT_s: '#99abf8', K9_s: '#99abf8',
                        QA_o: '#99abf8', QK_o: '#99abf8', QQ_o: '#99abf8', QJ_s: '#99abf8', QT_s: '#99abf8', Q9_s: '#99abf8',
                            JA_o: '#99abf8', JJ_o: '#99abf8', JT_s: '#99abf8', J9_s: '#99abf8',
                                TA_o:'#99abf8',TT_o: '#99abf8', T9_s: '#99abf8',
                                    _99_o: '#99abf8',
                                        _88_o: '#99abf8',
                                            _77_o: '#99abf8',
                                                _66_o: '#99abf8',
                                                    _55_o: '#99abf8',
            },
            HJ_12_13: {
                AA_o:'#99abf8', AK_s: '#99abf8', AQ_s: '#99abf8', AJ_s: '#99abf8', AT_s: '#99abf8', A9_s: '#99abf8', A8_s: '#99abf8', A7_s: '#99abf8', A6_s: '#99abf8', A5_s: '#99abf8', A4_s: '#99abf8', A3_s: '#99abf8', A2_s: '#99abf8',
                    KA_o: '#99abf8', KK_o: '#99abf8', KQ_s: '#99abf8', KJ_s: '#99abf8', KT_s: '#99abf8', K9_s: '#99abf8',
                        QA_o: '#99abf8', QK_o: '#99abf8', QQ_o: '#99abf8', QJ_s: '#99abf8', QT_s: '#99abf8', Q9_s: '#99abf8',
                            JA_o: '#99abf8', JK_o: '#99abf8', JJ_o: '#99abf8', JT_s: '#99abf8', J9_s: '#99abf8',
                                TA_o:'#99abf8', TT_o: '#99abf8', T9_s: '#99abf8',
                                    _9A_o:'#99abf8', _99_o: '#99abf8', _98_s: '#99abf8',
                                        _8A_o:'#99abf8',_88_o: '#99abf8',
                                            _77_o: '#99abf8',
                                                _66_o: '#99abf8',
                                                    _55_o: '#99abf8',
                                                        _44_o: '#99abf8',
                                                            _33_o: '#99abf8',
                                                                _22_o: '#99abf8',
            },
            CO_12_13:{
                AA_o:'#99abf8', AK_s: '#99abf8', AQ_s: '#99abf8', AJ_s: '#99abf8', AT_s: '#99abf8', A9_s: '#99abf8', A8_s: '#99abf8', A7_s: '#99abf8', A6_s: '#99abf8', A5_s: '#99abf8', A4_s: '#99abf8', A3_s: '#99abf8', A2_s: '#99abf8',
                    KA_o: '#99abf8', KK_o: '#99abf8', KQ_s: '#99abf8', KJ_s: '#99abf8', KT_s: '#99abf8', K9_s: '#99abf8', K8_s: '#99abf8',
                        QA_o: '#99abf8', QK_o: '#99abf8', QJ_o: '#99abf8', QQ_o: '#99abf8', QJ_s: '#99abf8', QT_s: '#99abf8', Q9_s: '#99abf8', Q8_s: '#99abf8',
                            JA_o: '#99abf8', JK_o: '#99abf8', JQ_o: '#99abf8', JJ_o: '#99abf8', JT_s: '#99abf8', J9_s: '#99abf8', J8_s: '#99abf8',
                                TA_o:'#99abf8', TK_o:'#99abf8', TT_o: '#99abf8', T9_s: '#99abf8', T8_s: '#99abf8',
                                    _9A_o:'#99abf8', _99_o: '#99abf8', _98_s: '#99abf8',
                                        _8A_o:'#99abf8', _88_o: '#99abf8', _87_s: '#99abf8',
                                            _7A_o:'#99abf8',_77_o: '#99abf8',
                                                _6A_o:'#99abf8',_66_o: '#99abf8',
                                                    _5A_o:'#99abf8',_55_o: '#99abf8',
                                                        _4A_o:'#99abf8',_44_o: '#99abf8',
                                                            _33_o: '#99abf8',
                                                                _22_o: '#99abf8',
            },
            BTN_12_13: {
                AA_o:'#99abf8', AK_s: '#99abf8', AQ_s: '#99abf8', AJ_s: '#99abf8', AT_s: '#99abf8', A9_s: '#99abf8', A8_s: '#99abf8', A7_s: '#99abf8', A6_s: '#99abf8', A5_s: '#99abf8', A4_s: '#99abf8', A3_s: '#99abf8', A2_s: '#99abf8',
                    KA_o: '#99abf8', KK_o: '#99abf8', KQ_s: '#99abf8', KJ_s: '#99abf8', KT_s: '#99abf8', K9_s: '#99abf8', K8_s: '#99abf8', K7_s: '#99abf8', K6_s: '#99abf8', K5_s: '#99abf8', K4_s: '#99abf8',
                        QA_o: '#99abf8', QK_o: '#99abf8', QJ_o: '#99abf8', QQ_o: '#99abf8', QJ_s: '#99abf8', QT_s: '#99abf8', Q9_s: '#99abf8', Q8_s: '#99abf8',
                            JA_o: '#99abf8', JK_o: '#99abf8', JQ_o: '#99abf8', JJ_o: '#99abf8', JT_s: '#99abf8', J9_s: '#99abf8', J8_s: '#99abf8',
                                TA_o:'#99abf8', TK_o:'#99abf8', TQ_o:'#99abf8', TJ_o:'#99abf8', TT_o: '#99abf8', T9_s: '#99abf8', T8_s: '#99abf8', T7_s: '#99abf8',
                                    _9A_o:'#99abf8', _9K_o:'#99abf8', _99_o: '#99abf8', _98_s: '#99abf8', _97_s: '#99abf8',
                                        _8A_o:'#99abf8', _88_o: '#99abf8', _87_s: '#99abf8', _86_s: '#99abf8',
                                            _7A_o:'#99abf8', _77_o: '#99abf8', _76_s: '#99abf8',
                                                _6A_o:'#99abf8',_66_o: '#99abf8',
                                                    _5A_o:'#99abf8',_55_o: '#99abf8',
                                                        _4A_o:'#99abf8',_44_o: '#99abf8',
                                                            _3A_o:'#99abf8',_33_o: '#99abf8',
                                                                _2A_o:'#99abf8',_22_o: '#99abf8',
            },
            SB_12_13: {
                AA_o:'#99abf8', AK_s: '#99abf8', AQ_s: '#99abf8', AJ_s: '#99abf8', AT_s: '#99abf8', A9_s: '#99abf8', A8_s: '#99abf8', A7_s: '#99abf8', A6_s: '#99abf8', A5_s: '#99abf8',A4_s: '#99abf8',A3_s: '#99abf8',A2_s: '#99abf8',
                    KA_o: '#99abf8', KK_o: '#99abf8', KQ_s: '#99abf8', KJ_s: '#99abf8', KT_s: '#99abf8', K9_s: '#99abf8', K8_s: '#99abf8', K7_s: '#99abf8', K6_s: '#99abf8', K5_s: '#99abf8', K4_s: '#99abf8', K3_s: '#99abf8', K2_s: '#99abf8',
                        QA_o: '#99abf8', QK_o: '#99abf8', QQ_o: '#99abf8', QJ_s: '#99abf8', QT_s: '#99abf8', Q9_s: '#99abf8', Q8_s: '#99abf8', Q7_s: '#99abf8', Q6_s: '#99abf8', Q5_s: '#99abf8', Q4_s: '#99abf8', Q3_s: '#99abf8', Q2_s: '#99abf8',
                            JA_o: '#99abf8', JK_o: '#99abf8',JQ_o: '#99abf8', JJ_o: '#99abf8', JT_s: '#99abf8', J9_s: '#99abf8', J8_s: '#99abf8', J7_s: '#99abf8', J6_s: '#99abf8', J5_s: '#99abf8', J4_s: '#99abf8',
                                TA_o: '#99abf8', TK_o: '#99abf8', TQ_o: '#99abf8', TJ_o: '#99abf8', TT_o: '#99abf8', T9_s: '#99abf8', T8_s: '#99abf8', T7_s: '#99abf8', T6_s: '#99abf8',
                                    _9A_o: '#99abf8', _9K_o: '#99abf8', _9Q_o: '#99abf8', _9J_o: '#99abf8', _9T_o: '#99abf8', _99_o: '#99abf8', _98_s: '#99abf8', _97_s: '#99abf8', _96_s: '#99abf8',
                                        _8A_o: '#99abf8', _8K_o: '#99abf8', _8Q_o: '#99abf8', _8J_o: '#99abf8', _8T_o: '#99abf8', _89_o: '#99abf8', _88_o: '#99abf8', _87_s: '#99abf8', _86_s: '#99abf8', _85_s: '#99abf8',
                                            _7A_o: '#99abf8', _7K_o: '#99abf8', _7Q_o: '#99abf8', _77_o: '#99abf8', _76_s: '#99abf8', _75_s: '#99abf8',
                                                _6A_o: '#99abf8', _6K_o: '#99abf8',  _6Q_o: '#99abf8', _66_o: '#99abf8', _65_s: '#99abf8', _64_s: '#99abf8',
                                                    _5A_o: '#99abf8', _5K_o: '#99abf8',  _5Q_o: '#99abf8', _55_o: '#99abf8', _54_s: '#99abf8',
                                                        _4A_o: '#99abf8', _4K_o: '#99abf8', _44_o: '#99abf8',
                                                            _3A_o: '#99abf8', _3K_o: '#99abf8', _33_o: '#99abf8',
                                                                _2A_o: '#99abf8', _2K_o: '#99abf8', _22_o: '#99abf8',
            },
            EP_14_15: {
                AA_o:'#54c0e5', AK_s: '#54c0e5', AQ_s: '#54c0e5', AJ_s: '#54c0e5', AT_s: '#54c0e5',
                    KA_o: '#54c0e5', KK_o: '#54c0e5', KQ_s: '#54c0e5', KJ_s: '#54c0e5',
                        QA_o: '#54c0e5', QQ_o: '#54c0e5', QJ_s: '#54c0e5',
                            JJ_o: '#54c0e5',
                                TT_o: '#54c0e5',
                                    _99_o: '#54c0e5',
                                        _88_o: '#54c0e5',
            },
            MP_14_15: {
                AA_o:'#54c0e5', AK_s: '#54c0e5', AQ_s: '#54c0e5', AJ_s: '#54c0e5', AT_s: '#54c0e5', A9_s: '#54c0e5',
                    KA_o: '#54c0e5', KK_o: '#54c0e5', KQ_s: '#54c0e5', KJ_s: '#54c0e5', KT_s: '#54c0e5', K9_s: '#54c0e5',
                        QA_o: '#54c0e5', QK_o: '#54c0e5', QQ_o: '#54c0e5', QJ_s: '#54c0e5', QT_s: '#54c0e5',
                            JA_o: '#54c0e5',JJ_o: '#54c0e5', JT_s: '#54c0e5',
                                TT_o: '#54c0e5', T9_s: '#54c0e5',
                                    _99_o: '#54c0e5',
                                        _88_o: '#54c0e5',
                                            _77_o: '#54c0e5',
                                                _66_o: '#54c0e5',
                                                    _55_o: '#54c0e5',
            },
            HJ_14_15: {
                AA_o:'#54c0e5', AK_s: '#54c0e5', AQ_s: '#54c0e5', AJ_s: '#54c0e5', AT_s: '#54c0e5', A9_s: '#54c0e5', A8_s: '#54c0e5', A7_s: '#54c0e5', A6_s: '#54c0e5', A5_s: '#54c0e5', A4_s: '#54c0e5', A3_s: '#54c0e5', A2_s: '#54c0e5',
                    KA_o: '#54c0e5', KK_o: '#54c0e5', KQ_s: '#54c0e5', KJ_s: '#54c0e5', KT_s: '#54c0e5', K9_s: '#54c0e5',
                        QA_o: '#54c0e5', QK_o: '#54c0e5', QQ_o: '#54c0e5', QJ_s: '#54c0e5', QT_s: '#54c0e5', Q9_s: '#54c0e5',
                            JA_o: '#54c0e5', JJ_o: '#54c0e5', JT_s: '#54c0e5', J9_s: '#54c0e5',
                                TA_o: '#54c0e5', TT_o: '#54c0e5', T9_s: '#54c0e5',
                                    _9A_o: '#54c0e5', _99_o: '#54c0e5',
                                        _88_o: '#54c0e5',
                                            _77_o: '#54c0e5',
                                                _66_o: '#54c0e5',
                                                    _55_o: '#54c0e5',
                                                        _44_o: '#54c0e5',
                                                            _33_o: '#54c0e5',
                                                                _22_o: '#54c0e5',
            },
            CO_14_15: {
                AA_o:'#54c0e5', AK_s: '#54c0e5', AQ_s: '#54c0e5', AJ_s: '#54c0e5', AT_s: '#54c0e5', A9_s: '#54c0e5', A8_s: '#54c0e5', A7_s: '#54c0e5', A6_s: '#54c0e5', A5_s: '#54c0e5', A4_s: '#54c0e5', A3_s: '#54c0e5', A2_s: '#54c0e5',
                    KA_o: '#54c0e5', KK_o: '#54c0e5', KQ_s: '#54c0e5', KJ_s: '#54c0e5', KT_s: '#54c0e5', K9_s: '#54c0e5',
                        QA_o: '#54c0e5', QK_o: '#54c0e5', QQ_o: '#54c0e5', QJ_s: '#54c0e5', QT_s: '#54c0e5', Q9_s: '#54c0e5',
                            JA_o: '#54c0e5', JK_o: '#54c0e5', JJ_o: '#54c0e5', JT_s: '#54c0e5', J9_s: '#54c0e5',
                                TA_o: '#54c0e5', TT_o: '#54c0e5', T9_s: '#54c0e5',
                                    _9A_o: '#54c0e5',_9A_o: '#54c0e5', _99_o: '#54c0e5', _98_s: '#54c0e5',
                                        _8A_o: '#54c0e5',_88_o: '#54c0e5',
                                            _7A_o: '#54c0e5',_77_o: '#54c0e5',
                                                _66_o: '#54c0e5',
                                                    _55_o: '#54c0e5',
                                                        _44_o: '#54c0e5',
                                                            _33_o: '#54c0e5',
                                                                _22_o: '#54c0e5',
            },
            BTN_14_15: {
                AA_o:'#54c0e5', AK_s: '#54c0e5', AQ_s: '#54c0e5', AJ_s: '#54c0e5', AT_s: '#54c0e5', A9_s: '#54c0e5', A8_s: '#54c0e5', A7_s: '#54c0e5', A6_s: '#54c0e5', A5_s: '#54c0e5', A4_s: '#54c0e5', A3_s: '#54c0e5', A2_s: '#54c0e5',
                    KA_o: '#54c0e5', KK_o: '#54c0e5', KQ_s: '#54c0e5', KJ_s: '#54c0e5', KT_s: '#54c0e5', K9_s: '#54c0e5', K8_s: '#54c0e5', K7_s: '#54c0e5', K6_s: '#54c0e5',
                        QA_o: '#54c0e5', QK_o: '#54c0e5', QQ_o: '#54c0e5', QJ_s: '#54c0e5', QT_s: '#54c0e5', Q9_s: '#54c0e5', Q8_s: '#54c0e5',
                            JA_o: '#54c0e5', JK_o: '#54c0e5', JQ_o: '#54c0e5', JJ_o: '#54c0e5', JT_s: '#54c0e5', J9_s: '#54c0e5', J8_s: '#54c0e5',
                                TA_o: '#54c0e5', TK_o: '#54c0e5', TQ_o: '#54c0e5', TJ_o: '#54c0e5', TT_o: '#54c0e5', T9_s: '#54c0e5', T8_s: '#54c0e5',
                                    _9A_o: '#54c0e5', _99_o: '#54c0e5', _98_s: '#54c0e5', _97_s: '#54c0e5',
                                        _8A_o: '#54c0e5', _88_o: '#54c0e5', _87_s: '#54c0e5',
                                            _7A_o: '#54c0e5',_77_o: '#54c0e5',
                                                _6A_o: '#54c0e5',_66_o: '#54c0e5',
                                                    _5A_o: '#54c0e5',_55_o: '#54c0e5',
                                                        _4A_o: '#54c0e5',_44_o: '#54c0e5',
                                                            _3A_o: '#54c0e5',_33_o: '#54c0e5',
                                                                _2A_o: '#54c0e5',_22_o: '#54c0e5',
            },
            SB_14_15: {
                AA_o:'#54c0e5', AK_s: '#54c0e5', AQ_s: '#54c0e5', AJ_s: '#54c0e5', AT_s: '#54c0e5', A9_s: '#54c0e5', A8_s: '#54c0e5', A7_s: '#54c0e5', A6_s: '#54c0e5', A5_s: '#54c0e5', A4_s: '#54c0e5', A3_s: '#54c0e5', A2_s: '#54c0e5',
                    KA_o: '#54c0e5', KK_o: '#54c0e5', KQ_s: '#54c0e5', KJ_s: '#54c0e5', KT_s: '#54c0e5', K9_s: '#54c0e5', K8_s: '#54c0e5', K7_s: '#54c0e5', K6_s: '#54c0e5', K5_s: '#54c0e5', K4_s: '#54c0e5', K3_s: '#54c0e5', K2_s: '#54c0e5',
                        QA_o: '#54c0e5', QK_o: '#54c0e5', QQ_o: '#54c0e5', QJ_s: '#54c0e5', QT_s: '#54c0e5', Q9_s: '#54c0e5', Q8_s: '#54c0e5', Q7_s: '#54c0e5', Q6_s: '#54c0e5', Q5_s: '#54c0e5', Q4_s: '#54c0e5', Q3_s: '#54c0e5', Q2_s: '#54c0e5',
                            JA_o: '#54c0e5', JK_o: '#54c0e5', JQ_o: '#54c0e5', JJ_o: '#54c0e5', JT_s: '#54c0e5', J9_s: '#54c0e5', J8_s: '#54c0e5', J7_s: '#54c0e5', J6_s: '#54c0e5', J5_s: '#54c0e5',
                                TA_o: '#54c0e5', TK_o: '#54c0e5', TQ_o: '#54c0e5', TJ_o: '#54c0e5', TT_o: '#54c0e5', T9_s: '#54c0e5', T8_s: '#54c0e5', T7_s: '#54c0e5', T6_s: '#54c0e5',
                                    _9A_o: '#54c0e5', _9K_o: '#54c0e5', _9Q_o: '#54c0e5', _9J_o: '#54c0e5', _9T_o: '#54c0e5', _99_o: '#54c0e5', _98_s: '#54c0e5', _97_s: '#54c0e5', _96_s: '#54c0e5',
                                        _8A_o: '#54c0e5', _8K_o: '#54c0e5', _8Q_o: '#54c0e5', _88_o: '#54c0e5', _87_s: '#54c0e5', _86_s: '#54c0e5',
                                            _7A_o: '#54c0e5', _7K_o: '#54c0e5', _77_o: '#54c0e5', _76_s: '#54c0e5', _75_s: '#54c0e5',
                                                _6A_o: '#54c0e5', _6K_o: '#54c0e5', _66_o: '#54c0e5', _65_s: '#54c0e5',
                                                    _5A_o: '#54c0e5', _5K_o: '#54c0e5', _55_o: '#54c0e5', _54_s: '#54c0e5',
                                                        _4A_o: '#54c0e5', _4K_o: '#54c0e5', _44_o: '#54c0e5',
                                                            _3A_o: '#54c0e5', _3K_o: '#54c0e5', _33_o: '#54c0e5',
                                                                _2A_o: '#54c0e5', _2K_o: '#54c0e5', _22_o: '#54c0e5',
            },
            EP_16_35: {
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac',
                                TT_o: '#f4c2ac', T9_s: '#f4c2ac',
                                    _99_o: '#f4c2ac',
                                        _88_o: '#f4c2ac',
                                            _77_o: '#f4c2ac',
            },
            MP_16_35: {
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac',  K9_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac',
                                TA_o: '#f4c2ac',TT_o: '#f4c2ac', T9_s: '#f4c2ac',
                                    _99_o: '#f4c2ac',
                                        _88_o: '#f4c2ac',
                                            _77_o: '#f4c2ac',
                                                _66_o: '#f4c2ac',
            },
            HJ_16_35: {
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A7_s: '#f4c2ac', A6_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac',  K9_s: '#f4c2ac', K8_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac', Q9_s: '#f4c2ac', Q8_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac', J9_s: '#f4c2ac',
                                TA_o: '#f4c2ac',TT_o: '#f4c2ac', T9_s: '#f4c2ac',
                                    _99_o: '#f4c2ac', _98_s: '#f4c2ac',
                                        _88_o: '#f4c2ac', _87_s: '#f4c2ac',
                                            _77_o: '#f4c2ac',
                                                _66_o: '#f4c2ac',
                                                    _55_o: '#f4c2ac',
            },
            CO_16_35: {
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A7_s: '#f4c2ac', A6_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac',  K9_s: '#f4c2ac', K8_s: '#f4c2ac', K7_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac', Q9_s: '#f4c2ac', Q8_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JQ_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac', J9_s: '#f4c2ac', J8_s: '#f4c2ac',
                                TA_o: '#f4c2ac', TK_o: '#f4c2ac', TT_o: '#f4c2ac', T9_s: '#f4c2ac', T8_s: '#f4c2ac',
                                    _9A_o: '#f4c2ac',_99_o: '#f4c2ac', _98_s: '#f4c2ac',
                                        _8A_o: '#f4c2ac',_88_o: '#f4c2ac', _87_s: '#f4c2ac',
                                            _77_o: '#f4c2ac', _76_s: '#f4c2ac',
                                                _66_o: '#f4c2ac',
                                                    _55_o: '#f4c2ac',
                                                        _44_o: '#f4c2ac',
                                                            _33_o: '#f4c2ac',
                                                                _22_o: '#f4c2ac',
            },
            BTN_16_35: {
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A7_s: '#f4c2ac', A6_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac',  K9_s: '#f4c2ac', K8_s: '#f4c2ac', K7_s: '#f4c2ac', K6_s: '#f4c2ac', K5_s: '#f4c2ac', K4_s: '#f4c2ac', K3_s: '#f4c2ac', K2_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac', Q9_s: '#f4c2ac', Q8_s: '#f4c2ac', Q7_s: '#f4c2ac', Q6_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JQ_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac', J9_s: '#f4c2ac', J8_s: '#f4c2ac', J7_s: '#f4c2ac',
                                TA_o: '#f4c2ac', TK_o: '#f4c2ac', TQ_o: '#f4c2ac', TJ_o: '#f4c2ac', TT_o: '#f4c2ac', T9_s: '#f4c2ac', T8_s: '#f4c2ac', T7_s: '#f4c2ac',
                                    _9A_o: '#f4c2ac', _9K_o: '#f4c2ac', _99_o: '#f4c2ac', _98_s: '#f4c2ac', _97_s: '#f4c2ac',
                                        _8A_o: '#f4c2ac',_88_o: '#f4c2ac', _87_s: '#f4c2ac',
                                            _7A_o: '#f4c2ac',_77_o: '#f4c2ac', _76_s: '#f4c2ac',
                                                _6A_o: '#f4c2ac',_66_o: '#f4c2ac',
                                                    _5A_o: '#f4c2ac',_55_o: '#f4c2ac',
                                                        _4A_o: '#f4c2ac',_44_o: '#f4c2ac',
                                                            _3A_o: '#f4c2ac',_33_o: '#f4c2ac',
                                                                _2A_o: '#f4c2ac',_22_o: '#f4c2ac',
            },
            SB_16_35: {
                AA_o:'#f4c2ac', AK_s: '#f4c2ac', AQ_s: '#f4c2ac', AJ_s: '#f4c2ac', AT_s: '#f4c2ac', A9_s: '#f4c2ac', A8_s: '#f4c2ac', A7_s: '#f4c2ac', A6_s: '#f4c2ac', A5_s: '#f4c2ac', A4_s: '#f4c2ac', A3_s: '#f4c2ac', A2_s: '#f4c2ac',
                    KA_o: '#f4c2ac', KK_o: '#f4c2ac', KQ_s: '#f4c2ac', KJ_s: '#f4c2ac', KT_s: '#f4c2ac',  K9_s: '#f4c2ac', K8_s: '#f4c2ac', K7_s: '#f4c2ac', K6_s: '#f4c2ac', K5_s: '#f4c2ac', K4_s: '#f4c2ac', K3_s: '#f4c2ac', K2_s: '#f4c2ac',
                        QA_o: '#f4c2ac', QK_o: '#f4c2ac', QQ_o: '#f4c2ac', QJ_s: '#f4c2ac', QT_s: '#f4c2ac', Q9_s: '#f4c2ac', Q8_s: '#f4c2ac', Q7_s: '#f4c2ac', Q6_s: '#f4c2ac',
                            JA_o: '#f4c2ac', JK_o: '#f4c2ac', JQ_o: '#f4c2ac', JJ_o: '#f4c2ac', JT_s: '#f4c2ac', J9_s: '#f4c2ac', J8_s: '#f4c2ac', J7_s: '#f4c2ac',
                                TA_o: '#f4c2ac', TK_o: '#f4c2ac', TQ_o: '#f4c2ac', TJ_o: '#f4c2ac', TT_o: '#f4c2ac', T9_s: '#f4c2ac', T8_s: '#f4c2ac', T7_s: '#f4c2ac',
                                    _9A_o: '#f4c2ac', _9K_o: '#f4c2ac', _9Q_o: '#f4c2ac', _9J_o: '#f4c2ac', _9T_o: '#f4c2ac', _99_o: '#f4c2ac', _98_s: '#f4c2ac', _97_s: '#f4c2ac',
                                        _8A_o: '#f4c2ac',_88_o: '#f4c2ac', _87_s: '#f4c2ac',
                                            _7A_o: '#f4c2ac',_77_o: '#f4c2ac', _76_s: '#f4c2ac',
                                                _6A_o: '#f4c2ac',_66_o: '#f4c2ac', _65_s: '#f4c2ac',
                                                    _5A_o: '#f4c2ac',_55_o: '#f4c2ac', _54_s: '#f4c2ac',
                                                        _4A_o: '#f4c2ac',_44_o: '#f4c2ac',
                                                            _3A_o: '#f4c2ac',_33_o: '#f4c2ac',
                                                                _2A_o: '#f4c2ac',_22_o: '#f4c2ac',
            },
            EP_36:{
                AA_o:'#88d0e9', AK_s: '#88d0e9', AQ_s: '#88d0e9', AJ_s: '#88d0e9', AT_s: '#88d0e9', A9_s: '#88d0e9', A8_s: '#88d0e9', A5_s: '#88d0e9', A4_s: '#88d0e9', A3_s: '#88d0e9', A2_s: '#88d0e9',
                    KA_o: '#88d0e9', KK_o: '#88d0e9', KQ_s: '#88d0e9', KJ_s: '#88d0e9', KT_s: '#88d0e9',
                        QA_o: '#88d0e9', QK_o: '#88d0e9', QQ_o: '#88d0e9', QJ_s: '#88d0e9', QT_s: '#88d0e9',
                            JA_o: '#88d0e9', JJ_o: '#88d0e9', JT_s: '#88d0e9',
                                TT_o: '#88d0e9', T9_s: '#88d0e9',
                                    _99_o: '#88d0e9',
                                        _88_o: '#88d0e9',
                                            _77_o: '#88d0e9',
            },
            MP_36: {
                AA_o:'#88d0e9', AK_s: '#88d0e9', AQ_s: '#88d0e9', AJ_s: '#88d0e9', AT_s: '#88d0e9', A9_s: '#88d0e9', A8_s: '#88d0e9', A7_s: '#88d0e9', A6_s: '#88d0e9', A5_s: '#88d0e9', A4_s: '#88d0e9', A3_s: '#88d0e9', A2_s: '#88d0e9',
                    KA_o: '#88d0e9', KK_o: '#88d0e9', KQ_s: '#88d0e9', KJ_s: '#88d0e9', KT_s: '#88d0e9',
                        QA_o: '#88d0e9', QK_o: '#88d0e9', QQ_o: '#88d0e9', QJ_s: '#88d0e9', QT_s: '#88d0e9',
                            JA_o: '#88d0e9', JJ_o: '#88d0e9', JT_s: '#88d0e9',
                                TT_o: '#88d0e9', T9_s: '#88d0e9',
                                    _99_o: '#88d0e9', _98_s: '#88d0e9',
                                        _88_o: '#88d0e9',
                                            _77_o: '#88d0e9',
                                                _66_o: '#88d0e9',
                                                    _55_o: '#88d0e9',
            },
            HJ_36: {
                AA_o:'#88d0e9', AK_s: '#88d0e9', AQ_s: '#88d0e9', AJ_s: '#88d0e9', AT_s: '#88d0e9', A9_s: '#88d0e9', A8_s: '#88d0e9', A7_s: '#88d0e9', A6_s: '#88d0e9', A5_s: '#88d0e9', A4_s: '#88d0e9', A3_s: '#88d0e9', A2_s: '#88d0e9',
                    KA_o: '#88d0e9', KK_o: '#88d0e9', KQ_s: '#88d0e9', KJ_s: '#88d0e9', KT_s: '#88d0e9', K9_s: '#88d0e9', K8_s: '#88d0e9',
                        QA_o: '#88d0e9', QK_o: '#88d0e9', QQ_o: '#88d0e9', QJ_s: '#88d0e9', QT_s: '#88d0e9', Q9_s: '#88d0e9', Q8_s: '#88d0e9',
                            JA_o: '#88d0e9', JK_o: '#88d0e9', JJ_o: '#88d0e9', JT_s: '#88d0e9', J9_s: '#88d0e9', J8_s: '#88d0e9',
                                TA_o: '#88d0e9',TT_o: '#88d0e9', T9_s: '#88d0e9', T8_s: '#88d0e9',
                                    _99_o: '#88d0e9', _98_s: '#88d0e9', _97_s: '#88d0e9',
                                        _88_o: '#88d0e9', _87_s: '#88d0e9', _86_s: '#88d0e9',
                                            _77_o: '#88d0e9', _76_s: '#88d0e9',
                                                _66_o: '#88d0e9', _65_s: '#88d0e9',
                                                    _55_o: '#88d0e9',
                                                        _44_o: '#88d0e9',
                                                            _33_o: '#88d0e9',
                                                                _22_o: '#88d0e9',
            },
            CO_36: {
                AA_o:'#88d0e9', AK_s: '#88d0e9', AQ_s: '#88d0e9', AJ_s: '#88d0e9', AT_s: '#88d0e9', A9_s: '#88d0e9', A8_s: '#88d0e9', A7_s: '#88d0e9', A6_s: '#88d0e9', A5_s: '#88d0e9', A4_s: '#88d0e9', A3_s: '#88d0e9', A2_s: '#88d0e9',
                    KA_o: '#88d0e9', KK_o: '#88d0e9', KQ_s: '#88d0e9', KJ_s: '#88d0e9', KT_s: '#88d0e9', K9_s: '#88d0e9', K8_s: '#88d0e9', K7_s: '#88d0e9', K6_s: '#88d0e9',
                        QA_o: '#88d0e9', QK_o: '#88d0e9', QQ_o: '#88d0e9', QJ_s: '#88d0e9', QT_s: '#88d0e9', Q9_s: '#88d0e9', Q8_s: '#88d0e9', Q7_s: '#88d0e9',
                            JA_o: '#88d0e9', JK_o: '#88d0e9', JQ_o: '#88d0e9', JJ_o: '#88d0e9', JT_s: '#88d0e9', J9_s: '#88d0e9', J8_s: '#88d0e9', J7_s: '#88d0e9',
                                TA_o: '#88d0e9', TK_o: '#88d0e9', TQ_o: '#88d0e9', TJ_o: '#88d0e9',TT_o: '#88d0e9', T9_s: '#88d0e9', T8_s: '#88d0e9', T7_s: '#88d0e9',
                                    _9A_o: '#88d0e9', _99_o: '#88d0e9', _98_s: '#88d0e9', _97_s: '#88d0e9',
                                        _8A_o: '#88d0e9',_88_o: '#88d0e9', _87_s: '#88d0e9', _86_s: '#88d0e9',
                                            _77_o: '#88d0e9', _76_s: '#88d0e9', _75_s: '#88d0e9',
                                                _66_o: '#88d0e9', _65_s: '#88d0e9',
                                                    _55_o: '#88d0e9', _54_s: '#88d0e9',
                                                        _44_o: '#88d0e9',
                                                            _33_o: '#88d0e9',
                                                                _22_o: '#88d0e9',
            },
            BTN_36: {
                AA_o:'#88d0e9', AK_s: '#88d0e9', AQ_s: '#88d0e9', AJ_s: '#88d0e9', AT_s: '#88d0e9', A9_s: '#88d0e9', A8_s: '#88d0e9', A7_s: '#88d0e9', A6_s: '#88d0e9', A5_s: '#88d0e9', A4_s: '#88d0e9', A3_s: '#88d0e9', A2_s: '#88d0e9',
                    KA_o: '#88d0e9', KK_o: '#88d0e9', KQ_s: '#88d0e9', KJ_s: '#88d0e9', KT_s: '#88d0e9', K9_s: '#88d0e9', K8_s: '#88d0e9', K7_s: '#88d0e9', K6_s: '#88d0e9', K5_s: '#88d0e9', K4_s: '#88d0e9', K3_s: '#88d0e9', K2_s: '#88d0e9',
                        QA_o: '#88d0e9', QK_o: '#88d0e9', QQ_o: '#88d0e9', QJ_s: '#88d0e9', QT_s: '#88d0e9', Q9_s: '#88d0e9', Q8_s: '#88d0e9', Q7_s: '#88d0e9', Q6_s: '#88d0e9',
                            JA_o: '#88d0e9', JK_o: '#88d0e9', JQ_o: '#88d0e9', JJ_o: '#88d0e9', JT_s: '#88d0e9', J9_s: '#88d0e9', J8_s: '#88d0e9', J7_s: '#88d0e9',
                                TA_o: '#88d0e9', TK_o: '#88d0e9', TQ_o: '#88d0e9', TJ_o: '#88d0e9',TT_o: '#88d0e9', T9_s: '#88d0e9', T8_s: '#88d0e9', T7_s: '#88d0e9',
                                    _9A_o: '#88d0e9',_9K_o: '#88d0e9', _9Q_o: '#88d0e9', _9J_o: '#88d0e9', _9T_o: '#88d0e9',_99_o: '#88d0e9', _98_s: '#88d0e9', _97_s: '#88d0e9',
                                        _8A_o: '#88d0e9',_88_o: '#88d0e9', _87_s: '#88d0e9', _86_s: '#88d0e9',
                                            _7A_o: '#88d0e9',_77_o: '#88d0e9', _76_s: '#88d0e9', _75_s: '#88d0e9',
                                                _6A_o: '#88d0e9',_66_o: '#88d0e9', _65_s: '#88d0e9',
                                                    _5A_o: '#88d0e9',_55_o: '#88d0e9', _54_s: '#88d0e9',
                                                        _4A_o: '#88d0e9',_44_o: '#88d0e9',
                                                            _3A_o: '#88d0e9',_33_o: '#88d0e9',
                                                                _2A_o: '#88d0e9',_22_o: '#88d0e9',
            },
            SB_36: {
                AA_o:'#88d0e9', AK_s: '#88d0e9', AQ_s: '#88d0e9', AJ_s: '#88d0e9', AT_s: '#88d0e9', A9_s: '#88d0e9', A8_s: '#88d0e9', A7_s: '#88d0e9', A6_s: '#88d0e9', A5_s: '#88d0e9', A4_s: '#88d0e9', A3_s: '#88d0e9', A2_s: '#88d0e9',
                    KA_o: '#88d0e9', KK_o: '#88d0e9', KQ_s: '#88d0e9', KJ_s: '#88d0e9', KT_s: '#88d0e9', K9_s: '#88d0e9', K8_s: '#88d0e9', K7_s: '#88d0e9', K6_s: '#88d0e9', K5_s: '#88d0e9', K4_s: '#88d0e9', K3_s: '#88d0e9', K2_s: '#88d0e9',
                        QA_o: '#88d0e9', QK_o: '#88d0e9', QQ_o: '#88d0e9', QJ_s: '#88d0e9', QT_s: '#88d0e9', Q9_s: '#88d0e9', Q8_s: '#88d0e9', Q7_s: '#88d0e9', Q6_s: '#88d0e9',
                            JA_o: '#88d0e9', JK_o: '#88d0e9', JQ_o: '#88d0e9', JJ_o: '#88d0e9', JT_s: '#88d0e9', J9_s: '#88d0e9', J8_s: '#88d0e9', J7_s: '#88d0e9', J6_s: '#88d0e9',
                                TA_o: '#88d0e9', TK_o: '#88d0e9', TQ_o: '#88d0e9', TJ_o: '#88d0e9',TT_o: '#88d0e9', T9_s: '#88d0e9', T8_s: '#88d0e9', T7_s: '#88d0e9',
                                    _9A_o: '#88d0e9',_9K_o: '#88d0e9', _9Q_o: '#88d0e9', _9J_o: '#88d0e9', _9T_o: '#88d0e9',_99_o: '#88d0e9', _98_s: '#88d0e9', _97_s: '#88d0e9',
                                        _8A_o: '#88d0e9', _8K_o: '#88d0e9', _8Q_o: '#88d0e9', _8J_o: '#88d0e9', _8T_o: '#88d0e9', _89_o: '#88d0e9',_88_o: '#88d0e9', _87_s: '#88d0e9', _86_s: '#88d0e9', _85_s: '#88d0e9',
                                            _7A_o: '#88d0e9',_77_o: '#88d0e9', _76_s: '#88d0e9', _75_s: '#88d0e9', _74_s: '#88d0e9',
                                                _6A_o: '#88d0e9',_66_o: '#88d0e9', _65_s: '#88d0e9', _64_s: '#88d0e9',
                                                    _5A_o: '#88d0e9',_55_o: '#88d0e9', _54_s: '#88d0e9', _53_s: '#88d0e9',
                                                        _4A_o: '#88d0e9',_44_o: '#88d0e9', _43_s: '#88d0e9',
                                                            _3A_o: '#88d0e9',_33_o: '#88d0e9',
                                                                _2A_o: '#88d0e9',_22_o: '#88d0e9',
            }
        }
    },
    methods:{
        ...mapActions(usePockerStore, ['changeCurrentTable']),
    },
    computed:{
        ...mapState(usePockerStore, ['currentTable'])
    }
}

</script>

<template>
    <div class="gPFB">
        <div class="PushFoldButtons">
            <button class="btn_4_5" @click="changeCurrentTable(EP_4_5)">4-5</button>
            <button class="btn_4_5" @click="changeCurrentTable(MP_4_5)">4-5</button>
            <button class="btn_4_5" @click="changeCurrentTable(HJ_4_5)">4-5</button>
            <button class="btn_4_5" @click="changeCurrentTable(CO_4_5)">4-5</button>
            <button class="btn_4_5" @click="changeCurrentTable(BTN_4_5)">4-5</button>
            <button class="btn_4_5" @click="changeCurrentTable(SB_4_5)">4-5</button>
        </div>
        <div class="PushFoldButtons">
            <button class="btn_6_7" @click="changeCurrentTable(EP_6_7)">6-7</button>
            <button class="btn_6_7" @click="changeCurrentTable(MP_6_7)">6-7</button>
            <button class="btn_6_7" @click="changeCurrentTable(HJ_6_7)">6-7</button>
            <button class="btn_6_7" @click="changeCurrentTable(CO_6_7)">6-7</button>
            <button class="btn_6_7" @click="changeCurrentTable(BTN_6_7)">6-7</button>
            <button class="btn_6_7" @click="changeCurrentTable(SB_6_7)">6-7</button>
        </div>
        <div class="PushFoldButtons">
            <button class="btn_8_9" @click="changeCurrentTable(EP_8_9)">8-9</button>
            <button class="btn_8_9" @click="changeCurrentTable(MP_8_9)">8-9</button>
            <button class="btn_8_9" @click="changeCurrentTable(HK_8_9)">8-9</button>
            <button class="btn_8_9" @click="changeCurrentTable(CO_8_9)">8-9</button>
            <button class="btn_8_9" @click="changeCurrentTable(BTN_8_9)">8-9</button>
            <button class="btn_8_9" @click="changeCurrentTable(SB_8_9)">8-9</button>
        </div>
        <div class="PushFoldButtons">
            <button class="btn_10_11" @click="changeCurrentTable(EP_10_11)">10-11</button>
            <button class="btn_10_11" @click="changeCurrentTable(MP_10_11)">10-11</button>
            <button class="btn_10_11" @click="changeCurrentTable(HJ_10_11)">10-11</button>
            <button class="btn_10_11" @click="changeCurrentTable(CO_10_11)">10-11</button>
            <button class="btn_10_11" @click="changeCurrentTable(BTN_10_11)">10-11</button>
            <button class="btn_10_11" @click="changeCurrentTable(SB_10_11)">10-11</button>
        </div>
        <div class="PushFoldButtons">
            <button class="btn_12_13" @click="changeCurrentTable(EP_12_13)">12-13</button>
            <button class="btn_12_13" @click="changeCurrentTable(MP_12_13)">12-13</button>
            <button class="btn_12_13" @click="changeCurrentTable(HJ_12_13)">12-13</button>
            <button class="btn_12_13" @click="changeCurrentTable(CO_12_13)">12-13</button>
            <button class="btn_12_13" @click="changeCurrentTable(BTN_12_13)">12-13</button>
            <button class="btn_12_13" @click="changeCurrentTable(SB_12_13)">12-13</button>
        </div>
        <div class="PushFoldButtons">
            <button class="btn_14_15" @click="changeCurrentTable(EP_14_15)">14-15</button>
            <button class="btn_14_15" @click="changeCurrentTable(MP_14_15)">14-15</button>
            <button class="btn_14_15" @click="changeCurrentTable(HJ_14_15)">14-15</button>
            <button class="btn_14_15" @click="changeCurrentTable(CO_14_15)">14-15</button>
            <button class="btn_14_15" @click="changeCurrentTable(BTN_14_15)">14-15</button>
            <button class="btn_14_15" @click="changeCurrentTable(SB_14_15)">14-15</button>
        </div>
        <div class="DescriptionButtons">
            <p>EP</p>
            <p>MP</p>
            <p>HJ</p>
            <p>CO</p>
            <p>BTN</p>
            <p>SB</p>
        </div>
        <div class="PushFoldButtons">
            <button class="btn_16_35" @click="changeCurrentTable(EP_16_35)">16-35</button>
            <button class="btn_16_35" @click="changeCurrentTable(MP_16_35)">16-35</button>
            <button class="btn_16_35" @click="changeCurrentTable(HJ_16_35)">16-35</button>
            <button class="btn_16_35" @click="changeCurrentTable(CO_16_35)">16-35</button>
            <button class="btn_16_35" @click="changeCurrentTable(BTN_16_35)">16-35</button>
            <button class="btn_16_35" @click="changeCurrentTable(SB_16_35)">16-35</button>
        </div>
        <div class="PushFoldButtons">
            <button class="btn_36" @click="changeCurrentTable(EP_36)">36+</button>
            <button class="btn_36" @click="changeCurrentTable(MP_36)">36+</button>
            <button class="btn_36" @click="changeCurrentTable(HJ_36)">36+</button>
            <button class="btn_36" @click="changeCurrentTable(CO_36)">36+</button>
            <button class="btn_36" @click="changeCurrentTable(BTN_36)">36+</button>
            <button class="btn_36" @click="changeCurrentTable(SB_36)">36+</button>
        </div>
    </div>
    
  </template>
  
  <style>
    .gPFB{
        display: flex;
    }

    .PushFoldButtons{
        display: flex; 
        flex-direction: column;
    }
    .DescriptionButtons{
        font-size: 10px;
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        font-weight: 900;
    }
    .btn_4_5 {
        -webkit-border-radius: 7;
        -moz-border-radius: 7;
        border-radius: 7px;
        font-family: Arial;
        color: #f799ac;
        font-size: 11px;
        background: transparent;
        padding: 8px 8px 8px 8px;
        border: solid #f799ac 1px;
        text-decoration: none;
        margin-left: 5px;
        width: 40px;
    }

    .btn_4_5:hover {
        background: #f799ac;
        background-image: -webkit-linear-gradient(top, #f799ac, #3498db);
        background-image: -moz-linear-gradient(top, #f799ac, #3498db);
        background-image: -ms-linear-gradient(top, #f799ac, #3498db);
        background-image: -o-linear-gradient(top, #f799ac, #3498db);
        background-image: linear-gradient(to bottom, #f799ac, #3498db);
        text-decoration: none;
        color: #fff;
    }

    .btn_6_7 {
        -webkit-border-radius: 7;
        -moz-border-radius: 7;
        border-radius: 7px;
        font-family: Arial;
        color: #f4c2ac;
        font-size: 11px;
        background: transparent;
        padding: 8px 8px 8px 8px;
        border: solid #f4c2ac 1px;
        text-decoration: none;
        margin-left: 5px;
        width: 40px;
    }

    .btn_6_7:hover {
        background: #f4c2ac;
        background-image: -webkit-linear-gradient(top, #f4c2ac, #3498db);
        background-image: -moz-linear-gradient(top, #f4c2ac, #3498db);
        background-image: -ms-linear-gradient(top, #f4c2ac, #3498db);
        background-image: -o-linear-gradient(top, #f4c2ac, #3498db);
        background-image: linear-gradient(to bottom, #f4c2ac, #3498db);
        text-decoration: none;
        color: #fff;
    }

    .btn_8_9 {
        -webkit-border-radius: 7;
        -moz-border-radius: 7;
        border-radius: 7px;
        font-family: Arial;
        color: #ead26b;
        font-size: 11px;
        background: transparent;
        padding: 8px 8px 8px 8px;
        border: solid #ead26b 1px;
        text-decoration: none;
        margin-left: 5px;
        width: 40px;
    }

    .btn_8_9:hover {
        background: #ead26b;
        background-image: -webkit-linear-gradient(top, #ead26b, #3498db);
        background-image: -moz-linear-gradient(top, #ead26b, #3498db);
        background-image: -ms-linear-gradient(top, #ead26b, #3498db);
        background-image: -o-linear-gradient(top, #ead26b, #3498db);
        background-image: linear-gradient(to bottom, #ead26b, #3498db);
        text-decoration: none;
        color: #fff;
    }

    .btn_10_11 {
        -webkit-border-radius: 7;
        -moz-border-radius: 7;
        border-radius: 7px;
        font-family: Arial;
        color: #51cbb0;
        font-size: 11px;
        background: transparent;
        padding: 8px 8px 8px 8px;
        border: solid #51cbb0 1px;
        text-decoration: none;
        margin-left: 5px;
        width: 50px;
    }

    .btn_10_11:hover {
        background: #51cbb0;
        background-image: -webkit-linear-gradient(top, #51cbb0, #3498db);
        background-image: -moz-linear-gradient(top, #51cbb0, #3498db);
        background-image: -ms-linear-gradient(top, #51cbb0, #3498db);
        background-image: -o-linear-gradient(top, #51cbb0, #3498db);
        background-image: linear-gradient(to bottom, #51cbb0, #3498db);
        text-decoration: none;
        color: #fff;
    }

    .btn_12_13 {
        -webkit-border-radius: 7;
        -moz-border-radius: 7;
        border-radius: 7px;
        font-family: Arial;
        color: #99abf8;
        font-size: 11px;
        background: transparent;
        padding: 8px 8px 8px 8px;
        border: solid #99abf8 1px;
        text-decoration: none;
        margin-left: 5px;
        width: 50px;
    }

    .btn_12_13:hover {
        background: #99abf8;
        background-image: -webkit-linear-gradient(top, #99abf8, #3498db);
        background-image: -moz-linear-gradient(top, #99abf8, #3498db);
        background-image: -ms-linear-gradient(top, #99abf8, #3498db);
        background-image: -o-linear-gradient(top, #99abf8, #3498db);
        background-image: linear-gradient(to bottom, #99abf8, #3498db);
        text-decoration: none;
        color: #fff;
    }

    .btn_14_15 {
        -webkit-border-radius: 7;
        -moz-border-radius: 7;
        border-radius: 7px;
        font-family: Arial;
        color: #54c0e5;
        font-size: 11px;
        background: transparent;
        padding: 8px 8px 8px 8px;
        border: solid #54c0e5 1px;
        text-decoration: none;
        margin-left: 5px;
        width: 50px;
    }

    .btn_14_15:hover {
        background: #54c0e5;
        background-image: -webkit-linear-gradient(top, #54c0e5, #3498db);
        background-image: -moz-linear-gradient(top, #54c0e5, #3498db);
        background-image: -ms-linear-gradient(top, #54c0e5, #3498db);
        background-image: -o-linear-gradient(top, #54c0e5, #3498db);
        background-image: linear-gradient(to bottom, #54c0e5, #3498db);
        text-decoration: none;
        color: #fff;
    }

    .btn_16_35{
        -webkit-border-radius: 7;
        -moz-border-radius: 7;
        border-radius: 7px;
        font-family: Arial;
        color: #f4c2ac;
        font-size: 11px;
        background: transparent;
        padding: 8px 8px 8px 8px;
        border: solid #f4c2ac 1px;
        text-decoration: none;
        margin-left: 5px;
        width: 50px;
    }

    .btn_16_35:hover{
        background: #f4c2ac;
        background-image: -webkit-linear-gradient(top, #f4c2ac, #3498db);
        background-image: -moz-linear-gradient(top, #f4c2ac, #3498db);
        background-image: -ms-linear-gradient(top, #f4c2ac, #3498db);
        background-image: -o-linear-gradient(top, #f4c2ac, #3498db);
        background-image: linear-gradient(to bottom, #f4c2ac, #3498db);
        text-decoration: none;
        color: #fff;
    }

    .btn_36{
        -webkit-border-radius: 7;
        -moz-border-radius: 7;
        border-radius: 7px;
        font-family: Arial;
        color: #88d0e9;
        font-size: 11px;
        background: transparent;
        padding: 8px 8px 8px 8px;
        border: solid #88d0e9 1px;
        text-decoration: none;
        margin-left: 5px;
        width: 50px;
    }

    .btn_36:hover{
        background: #88d0e9;
        background-image: -webkit-linear-gradient(top, #88d0e9, #3498db);
        background-image: -moz-linear-gradient(top, #88d0e9, #3498db);
        background-image: -ms-linear-gradient(top, #88d0e9, #3498db);
        background-image: -o-linear-gradient(top, #88d0e9, #3498db);
        background-image: linear-gradient(to bottom, #88d0e9, #3498db);
        text-decoration: none;
        color: #fff;
    }

  </style>
  