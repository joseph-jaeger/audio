var stimuli = {"adaptor_source": ["Ava-en-US_p361_chat_215-0.mp3", "Ava-en-US_p341_chat_215-1.mp3", "Ava-en-US_p231_chat_215-2.mp3", "Ava-en-US_p232_chat_215-3.mp3", "Ava-en-US_p227_chat_215-4.mp3", "Ava-en-US_p343_chat_215-5.mp3", "Ava-en-US_p345_chat_215-6.mp3", "Ava-en-US_p271_chat_215-7.mp3", "Ava-en-US_p233_chat_215-8.mp3", "Ava-en-US_p278_chat_215-9.mp3", "Ava-en-US_p265_chat_215-10.mp3", "Ava-en-US_p360_chat_215-11.mp3", "Ava-en-US_p361_chat_215-12.mp3", "Ava-en-US_p341_chat_215-13.mp3", "Ava-en-US_p231_chat_215-14.mp3", "Ava-en-US_p232_chat_215-15.mp3", "Ava-en-US_p227_chat_215-16.mp3", "Ava-en-US_p343_chat_215-17.mp3", "Ava-en-US_p345_chat_215-18.mp3", "Ava-en-US_p271_chat_215-19.mp3", "Ava-en-US_p233_chat_215-20.mp3", "Ava-en-US_p278_chat_215-21.mp3", "Ava-en-US_p265_chat_215-22.mp3", "Ava-en-US_p360_chat_215-23.mp3", "Ava-en-US_p361_chat_215-24.mp3", "Ava-en-US_p341_chat_215-25.mp3", "Ava-en-US_p231_chat_215-26.mp3", "Ava-en-US_p232_chat_215-27.mp3", "Ava-en-US_p227_chat_215-28.mp3", "Ava-en-US_p343_chat_215-29.mp3"], "probe_source": ["Ava-en-US_p361_chat_probe-117-0.mp3", "Ava-en-US_p233_chat_probe-76-0.mp3", "Ava-en-US_p361_chat_probe-119-0.mp3", "Ava-en-US_p271_chat_probe-141-0.mp3", "Ava-en-US_p361_chat_probe-87-0.mp3", "Ava-en-US_p232_chat_probe-9-0.mp3", "Ava-en-US_p361_chat_probe-135-0.mp3", "Ava-en-US_p271_chat_probe-113-0.mp3", "Ava-en-US_p361_chat_probe-78-0.mp3", "Ava-en-US_p231_chat_probe-18-0.mp3", "Ava-en-US_p361_chat_probe-90-0.mp3", "Ava-en-US_p265_chat_probe-41-0.mp3", "Ava-en-US_p341_chat_probe-40-0.mp3", "Ava-en-US_p343_chat_probe-1-0.mp3", "Ava-en-US_p341_chat_probe-131-0.mp3", "Ava-en-US_p361_chat_probe-16-0.mp3", "Ava-en-US_p341_chat_probe-69-0.mp3", "Ava-en-US_p271_chat_probe-130-0.mp3", "Ava-en-US_p341_chat_probe-101-0.mp3", "Ava-en-US_p227_chat_probe-57-0.mp3", "Ava-en-US_p341_chat_probe-10-0.mp3", "Ava-en-US_p271_chat_probe-67-0.mp3", "Ava-en-US_p341_chat_probe-19-0.mp3", "Ava-en-US_p233_chat_probe-43-0.mp3", "Ava-en-US_p231_chat_probe-48-0.mp3", "Ava-en-US_p341_chat_probe-147-0.mp3", "Ava-en-US_p231_chat_probe-121-0.mp3", "Ava-en-US_p361_chat_probe-45-0.mp3", "Ava-en-US_p231_chat_probe-144-0.mp3", "Ava-en-US_p345_chat_probe-88-0.mp3", "Ava-en-US_p231_chat_probe-115-0.mp3", "Ava-en-US_p232_chat_probe-139-0.mp3", "Ava-en-US_p231_chat_probe-73-0.mp3", "Ava-en-US_p233_chat_probe-59-0.mp3", "Ava-en-US_p231_chat_probe-111-0.mp3", "Ava-en-US_p343_chat_probe-30-0.mp3", "Ava-en-US_p232_chat_probe-142-0.mp3", "Ava-en-US_p361_chat_probe-27-0.mp3", "Ava-en-US_p232_chat_probe-77-0.mp3", "Ava-en-US_p361_chat_probe-83-0.mp3", "Ava-en-US_p232_chat_probe-33-0.mp3", "Ava-en-US_p227_chat_probe-8-0.mp3", "Ava-en-US_p227_chat_probe-122-0.mp3", "Ava-en-US_p361_chat_probe-98-0.mp3", "Ava-en-US_p227_chat_probe-89-0.mp3", "Ava-en-US_p341_chat_probe-120-0.mp3", "Ava-en-US_p227_chat_probe-79-0.mp3", "Ava-en-US_p360_chat_probe-105-0.mp3", "Ava-en-US_p343_chat_probe-17-0.mp3", "Ava-en-US_p341_chat_probe-94-0.mp3", "Ava-en-US_p343_chat_probe-52-0.mp3", "Ava-en-US_p360_chat_probe-96-0.mp3", "Ava-en-US_p343_chat_probe-84-0.mp3", "Ava-en-US_p345_chat_probe-32-0.mp3", "Ava-en-US_p345_chat_probe-25-0.mp3", "Ava-en-US_p271_chat_probe-14-0.mp3", "Ava-en-US_p345_chat_probe-35-0.mp3", "Ava-en-US_p271_chat_probe-132-0.mp3", "Ava-en-US_p233_chat_probe-34-0.mp3", "Ava-en-US_p271_chat_probe-128-0.mp3", "Ava-en-US_p233_chat_probe-49-0.mp3", "Ava-en-US_p361_chat_probe-143-0.mp3", "Ava-en-US_p233_chat_probe-72-0.mp3", "Ava-en-US_p278_chat_probe-123-0.mp3", "Ava-en-US_p343_chat_probe-93-0.mp3", "Ava-en-US_p278_chat_probe-103-0.mp3", "Ava-en-US_p265_chat_probe-21-0.mp3", "Ava-en-US_p271_chat_probe-74-0.mp3", "Ava-en-US_p265_chat_probe-39-0.mp3", "Ava-en-US_p360_chat_probe-136-0.mp3", "Ava-en-US_p345_chat_probe-60-0.mp3", "Ava-en-US_p360_chat_probe-3-0.mp3", "Ava-en-US_p361_chat_probe-62-0.mp3", "Ava-en-US_p341_chat_probe-138-0.mp3", "Ava-en-US_p341_chat_probe-104-0.mp3", "Ava-en-US_p227_chat_probe-66-0.mp3", "Ava-en-US_p231_chat_probe-20-0.mp3", "Ava-en-US_p361_chat_probe-13-0.mp3", "Ava-en-US_p232_chat_probe-65-0.mp3", "Ava-en-US_p360_chat_probe-129-0.mp3", "Ava-en-US_p227_chat_probe-11-0.mp3", "Ava-en-US_p360_chat_probe-47-0.mp3", "Ava-en-US_p343_chat_probe-127-0.mp3", "Ava-en-US_p232_chat_probe-46-0.mp3", "Ava-en-US_p345_chat_probe-22-0.mp3", "Ava-en-US_p341_chat_probe-145-0.mp3", "Ava-en-US_p271_chat_probe-116-0.mp3", "Ava-en-US_p227_chat_probe-51-0.mp3", "Ava-en-US_p233_chat_probe-31-0.mp3", "Ava-en-US_p271_chat_probe-61-0.mp3", "Ava-en-US_p278_chat_probe-4-0.mp3", "Ava-en-US_p360_chat_probe-106-0.mp3", "Ava-en-US_p265_chat_probe-50-0.mp3", "Ava-en-US_p345_chat_probe-100-0.mp3", "Ava-en-US_p360_chat_probe-63-0.mp3", "Ava-en-US_p227_chat_probe-75-0.mp3", "Ava-en-US_p361_chat_probe-36-0.mp3", "Ava-en-US_p278_chat_probe-38-0.mp3", "Ava-en-US_p341_chat_probe-24-0.mp3", "Ava-en-US_p345_chat_probe-85-0.mp3", "Ava-en-US_p231_chat_probe-102-0.mp3", "Ava-en-US_p341_chat_probe-54-0.mp3", "Ava-en-US_p232_chat_probe-64-0.mp3", "Ava-en-US_p231_chat_probe-91-0.mp3", "Ava-en-US_p227_chat_probe-109-0.mp3", "Ava-en-US_p278_chat_probe-42-0.mp3", "Ava-en-US_p343_chat_probe-95-0.mp3", "Ava-en-US_p231_chat_probe-15-0.mp3"], "feedback_source": ["Ava-en-US_p271_chat_probe-118-0.mp3", "Ava-en-US_p360_chat_probe-92-0.mp3", "Ava-en-US_p361_chat_probe-80-0.mp3", "Ava-en-US_p233_chat_probe-23-0.mp3", "Ava-en-US_p343_chat_probe-12-0.mp3", "Ava-en-US_p345_chat_probe-82-0.mp3", "Ava-en-US_p232_chat_probe-71-0.mp3", "Ava-en-US_p265_chat_probe-107-0.mp3", "Ava-en-US_p227_chat_probe-53-0.mp3", "Ava-en-US_p341_chat_probe-134-0.mp3", "Ava-en-US_p278_chat_probe-37-0.mp3", "Ava-en-US_p231_chat_probe-140-0.mp3", "Ava-en-US_p271_chat_probe-133-0.mp3", "Ava-en-US_p360_chat_probe-28-0.mp3", "Ava-en-US_p361_chat_probe-86-0.mp3", "Ava-en-US_p233_chat_probe-125-0.mp3", "Ava-en-US_p343_chat_probe-44-0.mp3", "Ava-en-US_p345_chat_probe-29-0.mp3", "Ava-en-US_p232_chat_probe-70-0.mp3", "Ava-en-US_p265_chat_probe-126-0.mp3", "Ava-en-US_p227_chat_probe-112-0.mp3", "Ava-en-US_p341_chat_probe-56-0.mp3", "Ava-en-US_p278_chat_probe-137-0.mp3", "Ava-en-US_p231_chat_probe-108-0.mp3", "Ava-en-US_p271_chat_probe-55-0.mp3"], "mem_correct_source": ["subject-1-Ava-mem_p231-2-0.mp3", "subject-1-Ava-mem_p361-0-1.mp3", "subject-1-Ava-mem_p231-2-2.mp3", "subject-1-Ava-mem_p343-5-3.mp3", "subject-1-Ava-mem_p227-4-4.mp3", "subject-1-Ava-mem_p343-5-5.mp3", "subject-1-Ava-mem_p360-11-6.mp3", "subject-1-Ava-mem_p265-10-7.mp3", "subject-1-Ava-mem_p233-8-8.mp3", "subject-1-Ava-mem_p343-17-9.mp3", "subject-1-Ava-mem_p231-14-10.mp3", "subject-1-Ava-mem_p361-12-11.mp3", "subject-1-Ava-mem_p343-29-12.mp3", "subject-1-Ava-mem_p271-19-13.mp3", "subject-1-Ava-mem_p341-25-14.mp3"], "mem_incorrect_source": ["Ava-en-US_p231_chat_probe-97-0.mp3", "Ava-en-US_p361_chat_probe-2-0.mp3", "Ava-en-US_p231_chat_probe-6-0.mp3", "Ava-en-US_p343_chat_probe-5-0.mp3", "Ava-en-US_p227_chat_probe-146-0.mp3", "Ava-en-US_p343_chat_probe-81-0.mp3", "Ava-en-US_p360_chat_probe-26-0.mp3", "Ava-en-US_p265_chat_probe-58-0.mp3", "Ava-en-US_p233_chat_probe-68-0.mp3", "Ava-en-US_p343_chat_probe-114-0.mp3", "Ava-en-US_p231_chat_probe-0-0.mp3", "Ava-en-US_p361_chat_probe-110-0.mp3", "Ava-en-US_p343_chat_probe-99-0.mp3", "Ava-en-US_p271_chat_probe-7-0.mp3", "Ava-en-US_p341_chat_probe-124-0.mp3"], "mem_indices": [2, 0, 2, 5, 4, 5, 11, 10, 8, 17, 14, 12, 29, 19, 25], "adaptor_speaker": ["p361", "p341", "p231", "p232", "p227", "p343", "p345", "p271", "p233", "p278", "p265", "p360", "p361", "p341", "p231", "p232", "p227", "p343", "p345", "p271", "p233", "p278", "p265", "p360", "p361", "p341", "p231", "p232", "p227", "p343"], "probe_speaker": ["p361", "p233", "p361", "p271", "p361", "p232", "p361", "p271", "p361", "p231", "p361", "p265", "p341", "p343", "p341", "p361", "p341", "p271", "p341", "p227", "p341", "p271", "p341", "p233", "p231", "p341", "p231", "p361", "p231", "p345", "p231", "p232", "p231", "p233", "p231", "p343", "p232", "p361", "p232", "p361", "p232", "p227", "p227", "p361", "p227", "p341", "p227", "p360", "p343", "p341", "p343", "p360", "p343", "p345", "p345", "p271", "p345", "p271", "p233", "p271", "p233", "p361", "p233", "p278", "p343", "p278", "p265", "p271", "p265", "p360", "p345", "p360", "p361", "p341", "p341", "p227", "p231", "p361", "p232", "p360", "p227", "p360", "p343", "p232", "p345", "p341", "p271", "p227", "p233", "p271", "p278", "p360", "p265", "p345", "p360", "p227", "p361", "p278", "p341", "p345", "p231", "p341", "p232", "p231", "p227", "p278", "p343", "p231"], "adaptor_duration": [240, 240, 240, 120, 120, 120, 60, 60, 60, 60, 60, 60, 30, 30, 30, 30, 30, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "adaptor_rate": [1.681792830507429, 0.5946035575013605, 1, 1.681792830507429, 0.5946035575013605, 1, 1.681792830507429, 0.5946035575013605, 1, 0.5946035575013605, 1.681792830507429, 1, 1.681792830507429, 0.5946035575013605, 1, 0.5946035575013605, 1.681792830507429, 1, 1.681792830507429, 0.5946035575013605, 1, 0.5946035575013605, 1.681792830507429, 1, 1.681792830507429, 0.5946035575013605, 1, 0.5946035575013605, 1.681792830507429, 1], "initial_probe_rate": [-0.23135826655113234, 0.22820339437430814, -0.4441765642175438, 0.15065255057847735, 0.04940093485412478, -0.26579148242373823, -0.12860311810266334, -0.38555250957380066, 0.252806944421832, -0.25661592307161296, 0.488521172617, -0.17481552307601245, 0.20460562785200254, 0.014900721192968147, -0.17480182739403882, 0.3388665056497977, -0.28383119396691453, 0.02528198759601888, -0.28968404624288435, -0.40046468345899555, 0.4585114147450531, -0.2138285312144802, 0.14642947737842746, 0.3053907542550085, 0.462201125180818, -0.10949430160742712, 0.4912584120532306, 0.00295791535929682, -0.05102303847912611, -0.2752823285843786, -0.10196045167160346, -0.2780141572404391, -6.669258773281395e-05, -0.2094594975254816, 0.17269766121349056, -0.39075309830124416, 0.17445506972376323, 0.4773958239645425, -0.20586893251117877, 0.32816624087083135, 0.24488014495701282, -0.13843992319450527, -0.28703180500857584, 0.3667362767107499, 0.2893693331352164, -0.40292823752962176, 0.3679941762972371, 0.462421701572321, -0.1792740446393356, -0.03992325349110279, 0.21577612764762333, -0.46177021261258416, 0.47538848066836503, -0.3165750820842532, 0.39076812785530535, 0.14168906736949108, -0.0742724112974339, 0.32776815664572967, -0.27652945365868964, -0.4616325005240242, -0.2603666351324907, 0.30700452914342247, -0.4442055208462227, 0.24400641653700839, -0.19641186057355553, 0.15675467884273683, 0.05020908455111184, 0.2714865806205301, -0.3941945531973734, -0.4894938484813277, 0.2651832866829726, -0.016718488456634067, -0.1014448399620892, -0.39421682067261815, 0.4697965044964699, -0.4282689099879672, 0.3676138422503308, -0.38139100556799277, 0.04160226291296554, -0.41787293463830255, 0.3199770471512282, -0.24890443819785552, 0.15201053451267055, 0.14691150741633333, 0.46659808834481453, -0.43772904992914413, 0.393500245521601, -0.388555531449746, 0.11139174982149469, 0.1973479743925184, 0.30826336327015824, -0.41064539414841744, 0.2291692649955287, -0.49669434554670866, -0.006738957249862065, 0.21805986538761468, 0.27774590846138814, -0.3302433218826156, -0.3267578916283964, 0.4949652903813575, -0.19437712351323866, 0.4448963873569095, -0.20651050562933226, 0.2138935490088983, -0.46824005410266334, 0.13436276123803745, 0.4071537669967973, 0.4153949618015074], "initial_probe_rate_lists": [[-0.23135826655113234, 0.22820339437430814, -0.4441765642175438, 0.15065255057847735, 0.04940093485412478, -0.26579148242373823, -0.12860311810266334, -0.38555250957380066, 0.252806944421832, -0.25661592307161296, 0.488521172617, -0.17481552307601245], [0.20460562785200254, 0.014900721192968147, -0.17480182739403882, 0.3388665056497977, -0.28383119396691453, 0.02528198759601888, -0.28968404624288435, -0.40046468345899555, 0.4585114147450531, -0.2138285312144802, 0.14642947737842746, 0.3053907542550085], [0.462201125180818, -0.10949430160742712, 0.4912584120532306, 0.00295791535929682, -0.05102303847912611, -0.2752823285843786, -0.10196045167160346, -0.2780141572404391, -6.669258773281395e-05, -0.2094594975254816, 0.17269766121349056, -0.39075309830124416], [0.17445506972376323, 0.4773958239645425, -0.20586893251117877, 0.32816624087083135, 0.24488014495701282, -0.13843992319450527], [-0.28703180500857584, 0.3667362767107499, 0.2893693331352164, -0.40292823752962176, 0.3679941762972371, 0.462421701572321], [-0.1792740446393356, -0.03992325349110279, 0.21577612764762333, -0.46177021261258416, 0.47538848066836503, -0.3165750820842532], [0.39076812785530535, 0.14168906736949108, -0.0742724112974339], [0.32776815664572967, -0.27652945365868964, -0.4616325005240242], [-0.2603666351324907, 0.30700452914342247, -0.4442055208462227], [0.24400641653700839, -0.19641186057355553, 0.15675467884273683], [0.05020908455111184, 0.2714865806205301, -0.3941945531973734], [-0.4894938484813277, 0.2651832866829726, -0.016718488456634067], [-0.1014448399620892, -0.39421682067261815], [0.4697965044964699, -0.4282689099879672], [0.3676138422503308, -0.38139100556799277], [0.04160226291296554, -0.41787293463830255], [0.3199770471512282, -0.24890443819785552], [0.15201053451267055, 0.14691150741633333], [0.46659808834481453, -0.43772904992914413], [0.393500245521601, -0.388555531449746], [0.11139174982149469, 0.1973479743925184], [0.30826336327015824, -0.41064539414841744], [0.2291692649955287, -0.49669434554670866], [-0.006738957249862065, 0.21805986538761468], [0.27774590846138814, -0.3302433218826156], [-0.3267578916283964, 0.4949652903813575], [-0.19437712351323866, 0.4448963873569095], [-0.20651050562933226, 0.2138935490088983], [-0.46824005410266334, 0.13436276123803745], [0.4071537669967973, 0.4153949618015074]], "match_mismatch": ["match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "match", "mismatch", "match", "match", "mismatch", "match", "match", "mismatch", "match", "match", "mismatch", "match", "match", "mismatch", "match", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch", "match", "mismatch"], "n_probes": [12, 12, 12, 6, 6, 6, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], "mem_rate": [1, 1.681792830507429, 1, 1, 0.5946035575013605, 1, 1, 1.681792830507429, 1, 1, 1, 1.681792830507429, 1, 0.5946035575013605, 0.5946035575013605], "feedback_rates": [0.8153176502175418, 1.0087001924180314, 0.8629604400430162, 1.0662843198544822, 1.244498936128345, 0.7491915880593805, 1.0088324843192278, 0.8578299950900664, 0.9967205894612233, 1.3923737100512608, 1.1273772226533638, 1.0186724196790102, 0.9198678999369965, 1.1966252773874562, 0.9270536516910327, 0.7911366981343078, 0.9586529581922465, 1.388453163808593, 1.3010745376704345, 0.7601353815874571, 1.4000838610930684, 0.9630285669738714, 1.0541451810383922, 1.1153150201965951, 0.8749067535270927], "seed_speaker": "Ava"};