const quizData = {
  "quiz_title": "Mock Test: Data Structures & Abstract Data Type (ADT)",
  "description": "แบบทดสอบครอบคลุมเนื้อหา Overview, Array, Linked List, Stack, Queue และ Recursion เน้นวัดความเข้าใจแนวคิด การวิเคราะห์ Time Complexity และการ trace algorithm ทีละสเต็ป เหมาะสำหรับทบทวนก่อนสอบกลางภาค",
  "chapters": [
    {
      "chapter_id": "chapter_overview",
      "chapter_name": "บทที่ 1 Overview: Data Structure และ Algorithm",
      "questions": [
        {
          "question": "สมการที่ Niklaus Wirth ใช้อธิบายความสัมพันธ์ระหว่าง Program กับองค์ประกอบพื้นฐานของมันคือข้อใด",
          "options": [
            "Program = Data Structure + Algorithm",
            "Program = Interface + Function",
            "Program = Data + Memory",
            "Program = Algorithm + Compiler"
          ],
          "correct_index": 0,
          "explanation": "หลักการพื้นฐานของวิชานี้คือ Program = Data Structure + Algorithm กล่าวคือโปรแกรมที่ดีต้องประกอบด้วยการจัดเก็บข้อมูลที่เหมาะสม (Data Structure) และขั้นตอนการประมวลผลที่ถูกต้องมีประสิทธิภาพ (Algorithm) สองสิ่งนี้ทำงานคู่กันเสมอ ตัวเลือกอื่นเป็นองค์ประกอบของระบบซอฟต์แวร์ทั่วไป แต่ไม่ใช่นิยามหลักของวิชา Data Structure"
        },
        {
          "question": "ข้อใดคือความหมายที่ถูกต้องที่สุดของ 'โครงสร้างข้อมูล' (Data Structure)",
          "options": [
            "วิธีการเขียนโค้ดให้สั้นที่สุด",
            "สิ่งที่บอกถึงลักษณะของข้อมูลที่จะนำมาประมวลผลในโปรแกรม รวมถึงวิธีจัดเก็บและความสัมพันธ์ระหว่างข้อมูล",
            "ภาษาโปรแกรมที่ใช้พัฒนาระบบ",
            "ผลลัพธ์สุดท้ายที่โปรแกรมแสดงออกมา"
          ],
          "correct_index": 1,
          "explanation": "โครงสร้างข้อมูลคือวิธีการจัดเก็บและจัดระเบียบข้อมูล รวมถึงความสัมพันธ์ระหว่างข้อมูลแต่ละส่วน เพื่อให้สามารถเข้าถึงและประมวลผลได้อย่างมีประสิทธิภาพ ไม่ใช่เรื่องภาษาโปรแกรมหรือความสั้นยาวของโค้ด ซึ่งเป็นคนละประเด็นกัน"
        },
        {
          "question": "โครงสร้างข้อมูลชุดใดต่อไปนี้จัดอยู่ในประเภท 'เชิงเส้น' (Linear Data Structure) ทั้งหมด",
          "options": [
            "Tree, Graph, Stack, Queue",
            "Array, Linked List, Stack, Queue",
            "Graph, Array, Tree, Hash Table",
            "Stack, Tree, Queue, Graph"
          ],
          "correct_index": 1,
          "explanation": "โครงสร้างข้อมูลเชิงเส้น (Linear) คือโครงสร้างที่ข้อมูลเรียงต่อกันเป็นลำดับ มีจุดเริ่มต้นและจุดสิ้นสุดชัดเจน ได้แก่ Array, Linked List, Stack และ Queue ส่วน Tree และ Graph เป็นโครงสร้างข้อมูลแบบไม่เชิงเส้น (Non-linear) เพราะข้อมูลหนึ่งตัวสามารถเชื่อมโยงกับข้อมูลอื่นได้มากกว่าหนึ่งทิศทาง"
        },
        {
          "question": "ข้อใดจัดเป็นโครงสร้างข้อมูลเชิงนามธรรม (Abstract) ตรงข้ามกับโครงสร้างข้อมูลเชิงกายภาพ (Physical)",
          "options": [
            "Integer และ Float",
            "String และ Array",
            "Stack และ Queue",
            "Byte และ Bit"
          ],
          "correct_index": 2,
          "explanation": "Stack และ Queue เป็นตัวอย่างของ Abstract Data Type (ADT) คือถูกนิยามด้วย 'พฤติกรรม' หรือ operation ที่ทำได้ (เช่น push/pop, enqueue/dequeue) โดยไม่สนใจว่าภายในจะ implement ด้วยอะไร ส่วน Integer, Float, String, Array, Byte เป็นโครงสร้างข้อมูลเชิงกายภาพที่ผูกติดกับการจัดเก็บในหน่วยความจำจริง"
        },
        {
          "question": "Flowchart และ Pseudocode ถูกนำมาใช้ในขั้นตอนใดของการพัฒนาโปรแกรม",
          "options": [
            "ใช้ทดสอบความเร็วของโปรแกรมหลังคอมไพล์เสร็จ",
            "ใช้สื่อสารและออกแบบขั้นตอนการทำงานของ Algorithm ก่อนลงมือเขียนโค้ดจริง",
            "ใช้แทนที่ภาษาโปรแกรมในการรันจริงบนเครื่อง",
            "ใช้เฉพาะตอนเขียนเอกสารหลังส่งมอบงานเสร็จแล้ว"
          ],
          "correct_index": 1,
          "explanation": "Flowchart (แผนภาพ) และ Pseudocode (รหัสจำลอง) เป็นเครื่องมือช่วยออกแบบและสื่อสารตรรกะของ Algorithm ก่อนที่จะแปลงเป็นโค้ดจริงในภาษาโปรแกรม ทำให้ผู้พัฒนาเห็นภาพรวมของ Input, Process, Output ได้ชัดเจน ลดข้อผิดพลาดก่อนลงมือเขียนโค้ดจริง"
        },
        {
          "question": "Algorithm ที่ดีควรประกอบด้วยองค์ประกอบหลักใดต่อไปนี้ตามลำดับ",
          "options": [
            "Compile, Run, Debug",
            "Input, Process, Output",
            "Design, Test, Deploy",
            "Variable, Loop, Function"
          ],
          "correct_index": 1,
          "explanation": "Algorithm ที่ดีต้องระบุ Input (ข้อมูลนำเข้า) Process (ขั้นตอนการประมวลผล) และ Output (ผลลัพธ์ที่ได้) อย่างชัดเจน ครบถ้วน และมีจำนวนขั้นตอนจำกัด (finite) เพื่อให้สามารถนำไปเขียนเป็นโปรแกรมจริงได้อย่างถูกต้อง"
        },
        {
          "question": "ในอัลกอริทึมแปลงเลขฐานสิบเป็นฐานสองด้วยวิธีหารสั้น ทำไมจึงต้องใช้ Stack ในการเก็บเศษที่ได้จากการหาร แทนที่จะเก็บลงใน Array ธรรมดาแล้วอ่านจากซ้ายไปขวา",
          "options": [
            "เพราะ Stack ใช้หน่วยความจำน้อยกว่า Array เสมอ",
            "เพราะเศษที่ได้จากการหารเรียงจากบิตที่มีนัยสำคัญน้อยที่สุด (LSB) ไปหามากที่สุด (MSB) ซึ่งเป็นลำดับย้อนกลับ Stack (LIFO) จึงช่วยกลับลำดับให้ถูกต้องโดยอัตโนมัติ",
            "เพราะ Array ไม่สามารถเก็บเลข 0 และ 1 ได้",
            "เพราะ Stack ทำให้โปรแกรมรันเร็วกว่า Array หลายเท่า"
          ],
          "correct_index": 1,
          "explanation": "เมื่อหารเลขฐานสิบด้วย 2 ไปเรื่อยๆ เศษที่ได้ตัวแรกจะเป็นบิตขวาสุด (LSB) และเศษตัวสุดท้ายจะเป็นบิตซ้ายสุด (MSB) แต่คำตอบต้องแสดงจาก MSB ไป LSB ดังนั้นการ push เศษลง Stack แล้ว pop ออกมาจะได้ลำดับที่ถูกต้องพอดี เพราะ Stack คืนค่าตัวที่เข้าล่าสุดออกมาก่อน (LIFO) ซึ่งตรงกับที่เราต้องการกลับลำดับ"
        },
        {
          "question": "Abstract Data Type (ADT) มีลักษณะสำคัญตามข้อใด",
          "options": [
            "ถูกนิยามด้วยชนิดของภาษาโปรแกรมที่ใช้เขียนเท่านั้น",
            "ถูกนิยามโดย operation หรือพฤติกรรมที่ทำได้ โดยไม่ขึ้นกับวิธีการ implement ภายใน",
            "ต้องเก็บข้อมูลในหน่วยความจำแบบต่อเนื่อง (contiguous) เท่านั้น",
            "ใช้ได้กับข้อมูลชนิดตัวเลขเท่านั้น ไม่รองรับข้อมูลชนิดอื่น"
          ],
          "correct_index": 1,
          "explanation": "ADT คือแนวคิดที่นิยามโครงสร้างข้อมูลผ่าน 'สิ่งที่ทำได้' (operation) เช่น Stack ต้องมี push, pop, peek โดยไม่สนใจว่าเบื้องหลังจะ implement ด้วย Array หรือ Linked List ทำให้ผู้ใช้งาน ADT ไม่จำเป็นต้องรู้รายละเอียดการ implement ภายใน สามารถเปลี่ยนวิธี implement ได้โดยไม่กระทบการใช้งาน"
        },
        {
          "type": "fill_blank",
          "question": "จงเติมคำในสมการ: Program = Data Structure + ____ (ตอบเป็นภาษาอังกฤษ 1 คำ)",
          "answer": "Algorithm",
          "accepted_answers": ["Algorithm", "algorithm", "อัลกอริทึม", "อัลกอริธึม"],
          "explanation": "สมการพื้นฐานของวิชานี้คือ Program = Data Structure + Algorithm ซึ่งหมายถึงโปรแกรมที่สมบูรณ์ต้องมีทั้งการจัดเก็บข้อมูลที่เหมาะสมและขั้นตอนวิธีการประมวลผลที่ถูกต้อง"
        },
        {
          "type": "fill_blank",
          "question": "คำว่า 'ADT' เป็นคำย่อของคำเต็มภาษาอังกฤษว่าอะไร",
          "answer": "Abstract Data Type",
          "accepted_answers": ["Abstract Data Type", "abstract data type", "Abstract data type"],
          "explanation": "ADT ย่อมาจาก Abstract Data Type หมายถึงชนิดข้อมูลที่ถูกนิยามผ่านพฤติกรรมหรือ operation ที่ทำได้ เช่น Stack, Queue โดยไม่ผูกติดกับวิธีการ implement ภายใน"
        },
        {
          "question": "Direct Recursion และ Indirect Recursion แตกต่างกันอย่างไร",
          "options": [
            "Direct Recursion คือฟังก์ชันเรียกตัวเองโดยตรงภายในนิยามของมันเอง ส่วน Indirect Recursion คือฟังก์ชัน A เรียกฟังก์ชัน B แล้ว B ย้อนกลับมาเรียก A อีกที (ผ่านฟังก์ชันอื่นเป็นตัวกลาง)",
            "Direct Recursion ใช้ได้กับตัวเลขเท่านั้น ส่วน Indirect Recursion ใช้ได้กับ String เท่านั้น",
            "ทั้งสองแบบมีความหมายเหมือนกันทุกประการ",
            "Direct Recursion ไม่มี Base Case ส่วน Indirect Recursion มี Base Case เสมอ"
          ],
          "correct_index": 0,
          "explanation": "Direct Recursion คือรูปแบบที่คุ้นเคยที่สุด คือฟังก์ชันเรียกใช้ตัวเองตรงๆ ภายในนิยามของมันเอง (เช่น factorial เรียก factorial) ส่วน Indirect Recursion คือฟังก์ชัน A เรียกฟังก์ชัน B และฟังก์ชัน B เรียกกลับมาที่ A อีกครั้ง (หรือผ่านฟังก์ชัน C เป็นทอดๆ) ทำให้เกิดวงจรการเรียกซ้ำที่ซับซ้อนกว่าแบบ Direct"
        },
        {
          "question": "Recursion Tree (แผนภาพต้นไม้การเรียกซ้ำ) มีประโยชน์อย่างไรในการวิเคราะห์ฟังก์ชัน Recursive",
          "options": [
            "ใช้บอกจำนวนบรรทัดโค้ดของฟังก์ชันเท่านั้น",
            "ใช้แสดงลำดับและโครงสร้างของการเรียกฟังก์ชันตัวเองซ้ำๆ ในรูปแบบต้นไม้ ช่วยให้เห็นภาพรวมของจำนวนครั้งที่ถูกเรียกและช่วยวิเคราะห์ Time Complexity ได้ง่ายขึ้น",
            "ใช้แทนที่ Flowchart ในทุกสถานการณ์",
            "ใช้ได้เฉพาะกับฟังก์ชันที่ไม่มี Base Case เท่านั้น"
          ],
          "correct_index": 1,
          "explanation": "Recursion Tree คือแผนภาพที่แสดงให้เห็นว่าฟังก์ชัน recursive ถูกเรียกซ้ำอย่างไรในแต่ละขั้น โดยแต่ละ node ในต้นไม้แทนการเรียกฟังก์ชันหนึ่งครั้ง และกิ่งก้านแสดงการเรียกฟังก์ชันย่อยที่เกิดขึ้นภายใน ช่วยให้เห็นภาพรวมของจำนวนครั้งที่ฟังก์ชันถูกเรียกทั้งหมด ซึ่งเป็นประโยชน์อย่างมากในการวิเคราะห์ Time Complexity ของฟังก์ชัน recursive โดยเฉพาะแบบที่เรียกตัวเองมากกว่าหนึ่งครั้งต่อขั้น เช่น fibonacci"
        },
        {
          "question": "กำหนดฟังก์ชัน sum(n) = n + sum(n-1) และ sum(0) = 0 จงหาค่า sum(4)",
          "options": [
            "6",
            "8",
            "10",
            "12"
          ],
          "correct_index": 2,
          "explanation": "ไล่ตามนิยาม: sum(4) = 4+sum(3) = 4+3+sum(2) = 4+3+2+sum(1) = 4+3+2+1+sum(0) = 4+3+2+1+0 = 10 เป็นตัวอย่างการ trace recursion ทีละขั้นจนถึง Base Case แล้วจึงบวกค่ากลับขึ้นมาตามลำดับการ return"
        },
        {
          "question": "ฟังก์ชัน Recursive ที่เรียกตัวเองมากกว่าหนึ่งครั้งในแต่ละขั้นตอน (เช่น fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)) จัดเป็น Recursion ประเภทใด",
          "options": [
            "Linear Recursion",
            "Tail Recursion",
            "Tree Recursion (หรือ Multiple Recursion)",
            "Indirect Recursion"
          ],
          "correct_index": 2,
          "explanation": "Tree Recursion (หรือเรียกว่า Multiple Recursion) คือรูปแบบที่ฟังก์ชันเรียกตัวเองมากกว่าหนึ่งครั้งในแต่ละขั้นตอน เช่น fibonacci ที่เรียกตัวเองสองครั้ง (n-1 และ n-2) ทำให้เมื่อวาด Recursion Tree ออกมาจะเห็นกิ่งก้านแตกแขนงออกไปหลายทาง ต่างจาก Linear Recursion ที่เรียกตัวเองเพียงครั้งเดียวต่อขั้น เช่น factorial"
        },
        {
          "question": "Recursion เหมาะสมและมีข้อดีเป็นพิเศษเมื่อนำไปใช้แก้ปัญหาประเภทใด",
          "options": [
            "ปัญหาที่ต้องใช้หน่วยความจำน้อยที่สุดเท่าที่เป็นไปได้เท่านั้น",
            "ปัญหาที่มีลักษณะแบ่งเป็นปัญหาย่อยที่มีโครงสร้างเหมือนปัญหาเดิมแต่ขนาดเล็กลงได้อย่างเป็นธรรมชาติ เช่น Tower of Hanoi หรือการเดินสำรวจ Tree",
            "ปัญหาที่ต้องการความเร็วสูงสุดในทุกกรณีโดยไม่มีข้อยกเว้น",
            "ปัญหาที่ไม่มี Base Case ที่ชัดเจน"
          ],
          "correct_index": 1,
          "explanation": "จุดแข็งของ Recursion คือการสื่อความหมายของปัญหาที่มีโครงสร้างแบ่งเป็นปัญหาย่อยที่คล้ายกันได้อย่างเป็นธรรมชาติ เช่น Tower of Hanoi ที่แต่ละขั้นคือการย้ายแผ่นดิสก์จำนวนน้อยลง หรือการเดินสำรวจโครงสร้าง Tree ที่แต่ละ subtree มีลักษณะเหมือน tree เดิมแต่เล็กลง ทำให้โค้ด recursive มักกระชับและเข้าใจง่ายกว่าการเขียนด้วย iteration ล้วนๆ แม้จะไม่ได้เหมาะกับทุกปัญหาหรือเร็วที่สุดเสมอไปก็ตาม"
        },
        {
          "question": "หากต้องการแปลงฟังก์ชัน Recursive ให้เป็น Iterative (ใช้ลูปแทน) โดยยังคงพฤติกรรมการทำงานเหมือนเดิม มักใช้โครงสร้างข้อมูลใดช่วยจำลองการทำงานของ Call Stack",
          "options": [
            "Queue",
            "Stack (explicit stack ที่สร้างขึ้นเอง)",
            "Array แบบเรียงลำดับ",
            "Hash Table"
          ],
          "correct_index": 1,
          "explanation": "เนื่องจาก Recursion ใช้ Call Stack ของระบบในการจัดการสถานะการเรียกแต่ละครั้งอยู่แล้ว การแปลงเป็น Iterative จึงมักใช้ Stack ที่สร้างขึ้นเอง (explicit stack) ในการจำลองพฤติกรรม push/pop สถานะแทนการเรียกฟังก์ชันซ้อนกันจริงๆ ทำให้ควบคุมการใช้หน่วยความจำได้ดีขึ้นและหลีกเลี่ยงความเสี่ยงจาก Stack Overflow ของระบบ"
        },
        {
          "question": "กำหนดฟังก์ชัน power(base, exp) = base × power(base, exp-1) และ power(base, 0) = 1 จงหาค่า power(2, 3)",
          "options": [
            "4",
            "6",
            "8",
            "9"
          ],
          "correct_index": 2,
          "explanation": "ไล่ตามนิยาม: power(2,3) = 2×power(2,2) = 2×2×power(2,1) = 2×2×2×power(2,0) = 2×2×2×1 = 8 เป็นตัวอย่างการยกกำลังด้วยหลักการ recursion ที่ลดค่า exponent ลงทีละ 1 จนถึง Base Case ที่ exp=0"
        },
        {
          "question": "ข้อใดคือปัญหาคลาสสิกที่นิยมใช้ Recursion ในการแก้ไข เนื่องจากมีโครงสร้างที่เหมาะกับการแบ่งเป็นปัญหาย่อยแบบเดียวกัน",
          "options": [
            "การเรียงลำดับข้อมูลด้วย Bubble Sort",
            "Tower of Hanoi (ปัญหาหอคอยฮานอย)",
            "การค้นหาค่ามากที่สุดใน Array แบบ linear scan",
            "การนับจำนวนสมาชิกใน Array"
          ],
          "correct_index": 1,
          "explanation": "Tower of Hanoi เป็นตัวอย่างคลาสสิกที่สุดของปัญหาที่เหมาะกับ Recursion เพราะการย้ายแผ่นดิสก์ n แผ่นจากเสาหนึ่งไปอีกเสาหนึ่งสามารถแบ่งเป็นปัญหาย่อย 3 ขั้นตอนคือ ย้าย n-1 แผ่นบนไปเสาช่วย, ย้ายแผ่นที่ n ไปเสาปลายทาง, แล้วย้าย n-1 แผ่นจากเสาช่วยไปเสาปลายทาง ซึ่งแต่ละขั้นย่อยมีลักษณะเหมือนปัญหาเดิมทุกประการเพียงแต่ขนาดเล็กลง สอดคล้องกับหลักการของ Recursion โดยตรง"
        },
        {
          "type": "fill_blank",
          "question": "ฟังก์ชัน Recursive ที่เรียกตัวเองมากกว่าหนึ่งครั้งในแต่ละขั้นตอน (เช่นในฟังก์ชัน fibonacci) จัดเป็น Recursion ประเภทใด (ตอบเป็นภาษาอังกฤษ)",
          "answer": "Tree Recursion",
          "accepted_answers": ["Tree Recursion", "tree recursion", "Multiple Recursion", "multiple recursion"],
          "explanation": "เรียกว่า Tree Recursion หรือ Multiple Recursion เพราะเมื่อวาดแผนภาพการเรียกซ้ำออกมาจะเห็นกิ่งก้านแตกแขนงออกไปหลายทางเหมือนต้นไม้ ต่างจาก Linear Recursion ที่เรียกตัวเองเพียงครั้งเดียวต่อขั้น"
        },
        {
          "type": "fill_blank",
          "question": "กำหนดฟังก์ชัน sum(n) = n + sum(n-1) และ sum(0) = 0 จงหาค่า sum(6) (ตอบเป็นตัวเลข)",
          "answer": "21",
          "accepted_answers": ["21"],
          "explanation": "ไล่ตามนิยาม: sum(6) = 6+5+4+3+2+1+sum(0) = 6+5+4+3+2+1+0 = 21 เป็นการรวมค่าจำนวนเต็มตั้งแต่ 1 ถึง 6 โดยใช้หลักการ recursion ที่ลดค่า n ลงทีละ 1 จนถึง Base Case ที่ n=0"
        },
      ]
    },
    {
      "chapter_id": "chapter_array",
      "chapter_name": "บทที่ 2 Array และ Array-based List",
      "questions": [
        {
          "question": "ข้อจำกัดที่สำคัญที่สุดของ Array แบบดั้งเดิม (Static Array) คือข้อใด",
          "options": [
            "ไม่สามารถเก็บข้อมูลชนิดตัวเลขได้",
            "มีขนาดคงที่ตามที่ประกาศไว้ตั้งแต่แรก ไม่สามารถขยายหรือลดขนาดได้ภายหลัง",
            "เข้าถึงข้อมูลด้วย index ไม่ได้",
            "ต้องเก็บข้อมูลหลายชนิดปนกันเสมอ"
          ],
          "correct_index": 1,
          "explanation": "Static Array ต้องกำหนดขนาดตายตัวตั้งแต่ตอนประกาศตัวแปร และหน่วยความจำที่จองไว้จะคงที่ตลอดอายุการใช้งาน หากต้องการข้อมูลมากกว่าที่จองไว้ต้องสร้าง Array ใหม่แล้วคัดลอกข้อมูล ต่างจาก Linked List ที่ขยายขนาดได้แบบไดนามิก"
        },
        {
          "question": "การเข้าถึงข้อมูลใน Array ด้วย index (เช่น arr[5]) มี Time Complexity เท่าใด",
          "options": [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n^2)"
          ],
          "correct_index": 2,
          "explanation": "Array เข้าถึงข้อมูลได้แบบ O(1) หรือ constant time เพราะสามารถคำนวณตำแหน่งหน่วยความจำ (address) ของ index ที่ต้องการได้โดยตรงจากสูตรคณิตศาสตร์ ไม่ต้องไล่ค้นหาทีละตัวเหมือน Linked List"
        },
        {
          "question": "การแทรก (insert) ข้อมูลใหม่เข้าไปตรงกลางของ Array ที่มีข้อมูลอยู่แล้ว n ตัว มี Time Complexity เท่าใดในกรณีเลวร้ายที่สุด",
          "options": [
            "O(1) เพราะแทรกที่ไหนก็ได้ทันที",
            "O(log n) เพราะใช้วิธีแบ่งครึ่ง",
            "O(n) เพราะต้องเลื่อนสมาชิกที่อยู่ถัดจากตำแหน่งแทรกทั้งหมดไปทางขวา",
            "O(n^2) เพราะต้องเปรียบเทียบทุกคู่"
          ],
          "correct_index": 2,
          "explanation": "เมื่อแทรกข้อมูลกลาง Array สมาชิกทุกตัวที่อยู่ถัดจากตำแหน่งที่แทรกต้องถูกเลื่อนไปทางขวาทีละตำแหน่งเพื่อเปิดที่ว่าง ในกรณีเลวร้ายที่สุด (แทรกที่ตำแหน่งแรกสุด) ต้องเลื่อนสมาชิกทั้งหมด n ตัว จึงมี Time Complexity เป็น O(n)"
        },
        {
          "question": "กำหนดให้ Array แบบ 0-based มี Base Address = 1000 และแต่ละสมาชิกมีขนาด 4 bytes จงคำนวณ Address ของสมาชิกที่ index 5",
          "options": [
            "1004",
            "1005",
            "1020",
            "1024"
          ],
          "correct_index": 2,
          "explanation": "สูตรคำนวณ Based Address คือ Address = Base + (Index × ขนาดสมาชิก) แทนค่าจะได้ 1000 + (5 × 4) = 1000 + 20 = 1020 หลักการนี้คือเหตุผลที่ทำให้ Array เข้าถึงข้อมูลได้แบบ O(1) เพราะคำนวณตำแหน่งได้โดยตรงไม่ต้องไล่นับ"
        },
        {
          "question": "พิจารณาโค้ดซูโดโค้ด: for (i = 0; i < 5; i++) { print(arr[i]); } หาก arr = [10, 20, 30, 40, 50] ผลลัพธ์ที่พิมพ์ออกมาตามลำดับคือข้อใด",
          "options": [
            "50, 40, 30, 20, 10",
            "10, 20, 30, 40, 50",
            "20, 30, 40, 50, 10",
            "10, 20, 30, 40"
          ],
          "correct_index": 1,
          "explanation": "ลูป for เริ่มจาก i=0 ถึง i=4 (เงื่อนไข i<5) จึงไล่พิมพ์ arr[0] ถึง arr[4] ตามลำดับ index จากน้อยไปมาก ได้ผลลัพธ์คือ 10, 20, 30, 40, 50 ตรงตามลำดับที่เก็บไว้ใน array ไม่มีการสลับหรือข้ามค่าใดๆ"
        },
        {
          "question": "Array-based List (เช่น ArrayList หรือ Dynamic Array) แตกต่างจาก Static Array แบบดั้งเดิมอย่างไร",
          "options": [
            "Array-based List ไม่สามารถเข้าถึงข้อมูลด้วย index ได้เลย",
            "Array-based List สามารถขยายขนาดอัตโนมัติได้เมื่อพื้นที่เต็ม โดยภายในมักจะสร้าง array ใหม่ที่ใหญ่ขึ้นแล้วคัดลอกข้อมูลเดิมไป",
            "Array-based List ใช้หน่วยความจำน้อยกว่า Static Array เสมอในทุกกรณี",
            "Array-based List ไม่รองรับการเก็บข้อมูลตัวเลข"
          ],
          "correct_index": 1,
          "explanation": "Array-based List เช่น ArrayList ใน Java หรือ list ใน Python ถูกออกแบบให้ขยายขนาดได้แบบไดนามิก โดยเมื่อพื้นที่เดิมเต็ม ระบบจะสร้าง array ใหม่ที่มีขนาดใหญ่ขึ้น (มักจะเป็น 2 เท่า) แล้วคัดลอกข้อมูลเดิมทั้งหมดไปยัง array ใหม่ ทำให้ผู้ใช้รู้สึกเหมือนขนาดยืดหยุ่นได้ แม้ภายในยังคงใช้ Array เป็นโครงสร้างหลัก"
        },
        {
          "question": "เหตุใด Array จึงสามารถเข้าถึงข้อมูล (Random Access) ได้เร็วกว่า Linked List",
          "options": [
            "เพราะ Array เก็บข้อมูลในหน่วยความจำแบบต่อเนื่อง (contiguous memory) ทำให้คำนวณตำแหน่งของสมาชิกใดๆ ได้โดยตรงจากสูตร โดยไม่ต้องไล่ตาม pointer ทีละตัว",
            "เพราะ Array ใช้หน่วยความจำน้อยกว่า Linked List เสมอ",
            "เพราะ CPU ประมวลผล Array ด้วยความเร็วสัญญาณนาฬิกาที่สูงกว่า",
            "เพราะ Linked List ไม่มี index กำกับเลย"
          ],
          "correct_index": 0,
          "explanation": "จุดเด่นของ Array คือการจัดเก็บข้อมูลแบบต่อเนื่องกันในหน่วยความจำ (contiguous) ทำให้คำนวณตำแหน่งของสมาชิกที่ index ใดๆ ได้ทันทีด้วยสูตรคณิตศาสตร์ (Base + index × size) ในขณะที่ Linked List แต่ละ node กระจัดกระจายอยู่ในหน่วยความจำและเชื่อมกันด้วย pointer จึงต้องไล่ตาม pointer ทีละ node จนกว่าจะถึงตำแหน่งที่ต้องการ"
        },
        {
          "question": "ข้อใดคือข้อดีของ Array เมื่อเทียบกับ Linked List",
          "options": [
            "แทรก/ลบข้อมูลตรงกลางได้เร็วกว่าเสมอ",
            "ขยายขนาดได้ไม่จำกัดโดยไม่ต้องคัดลอกข้อมูล",
            "เข้าถึงข้อมูลแบบสุ่ม (random access) ได้รวดเร็วด้วย Time Complexity O(1)",
            "ไม่จำเป็นต้องกำหนดชนิดข้อมูลที่จะเก็บ"
          ],
          "correct_index": 2,
          "explanation": "จุดแข็งหลักของ Array คือความเร็วในการเข้าถึงข้อมูลแบบสุ่ม (Random Access) ที่ O(1) เนื่องจากคำนวณตำแหน่งได้โดยตรง ในขณะที่การแทรก/ลบกลาง Array กลับช้ากว่า Linked List เพราะต้องเลื่อนสมาชิก และ Array ก็มีขนาดจำกัดตามที่ประกาศไว้ ไม่ใช่ขยายได้ไม่จำกัดแบบไม่มีต้นทุน"
        },
        {
          "type": "fill_blank",
          "question": "กำหนด Array แบบ 0-based มี Base Address = 2000 และขนาดของสมาชิกแต่ละตัว = 2 bytes ต้องการทราบ Address ของสมาชิกที่ index 10 (ตอบเป็นตัวเลข)",
          "answer": "2020",
          "accepted_answers": ["2020"],
          "explanation": "ใช้สูตร Address = Base + (Index × Size) = 2000 + (10 × 2) = 2000 + 20 = 2020 นี่คือหลักการที่ทำให้ Array สามารถเข้าถึงสมาชิกที่ตำแหน่งใดๆ ได้โดยตรงแบบ O(1)"
        },
        {
          "type": "fill_blank",
          "question": "Time Complexity ในการเข้าถึงข้อมูลด้วย index ของ Array คือเท่าใด (ตอบในรูปแบบ Big-O เช่น O(1))",
          "answer": "O(1)",
          "accepted_answers": ["O(1)", "o(1)", "O(1) ", "constant time"],
          "explanation": "เพราะ Array สามารถคำนวณตำแหน่งของสมาชิกที่ index ใดๆ ได้โดยตรงจากสูตร Base + index × size โดยไม่ต้องไล่ค้นหาทีละตัว จึงมี Time Complexity คงที่ไม่ว่าข้อมูลจะมีจำนวนเท่าใดก็ตาม"
        },
          {
    "question": "Array แบบสองมิติ (2D Array) ต้องใช้ index กี่ตัวในการระบุตำแหน่งของสมาชิกแต่ละตัว",
    "options": [
      "1 ตัว",
      "2 ตัว (row และ column)",
      "3 ตัว",
      "ไม่ต้องใช้ index เลย"
    ],
    "correct_index": 1,
    "explanation": "Array สองมิติต้องระบุตำแหน่งด้วย index สองตัวคือแถว (row) และคอลัมน์ (column) เช่น arr[2][3] หมายถึงสมาชิกที่แถวที่ 2 คอลัมน์ที่ 3 ต่างจาก Array มิติเดียวที่ใช้ index เพียงตัวเดียว"
  },
  {
    "question": "การคำนวณ Based Address ของ Array สองมิติแบบ Row-Major Order ใช้สูตรตามข้อใด (กำหนด n = จำนวนคอลัมน์ทั้งหมด)",
    "options": [
      "Address = Base + (row + col) × size",
      "Address = Base + (row × n + col) × size",
      "Address = Base + (col × n + row) × size",
      "Address = Base + row × col × size"
    ],
    "correct_index": 1,
    "explanation": "ใน Row-Major Order ข้อมูลจะถูกจัดเรียงในหน่วยความจำทีละแถว ดังนั้นตำแหน่งของสมาชิก [row][col] จะต้องข้ามผ่านทุกแถวก่อนหน้าไปก่อน (row × n สมาชิก) แล้วจึงบวกด้วย col ในแถวปัจจุบัน สูตรจึงเป็น Address = Base + (row × n + col) × size โดย n คือจำนวนคอลัมน์ทั้งหมดของ array"
  },
  {
    "question": "กำหนด Array สองมิติแบบ Row-Major, Base Address = 1000, ขนาดสมาชิก = 4 bytes, จำนวนคอลัมน์ทั้งหมด = 5 จงหา Address ของสมาชิกที่ [2][3]",
    "options": [
      "1020",
      "1040",
      "1052",
      "1060"
    ],
    "correct_index": 2,
    "explanation": "ใช้สูตร Address = Base + (row × n + col) × size = 1000 + (2×5 + 3) × 4 = 1000 + (10+3)×4 = 1000 + 13×4 = 1000 + 52 = 1052"
  },
  {
    "question": "การลบสมาชิกที่ตำแหน่งแรกสุด (index 0) ของ Array ที่มีสมาชิก n ตัว มี Time Complexity เท่าใด",
    "options": [
      "O(1) เพราะลบตำแหน่งแรกทำได้ทันที",
      "O(n) เพราะสมาชิกที่เหลือทั้งหมดต้องถูกเลื่อนไปทางซ้ายหนึ่งตำแหน่ง",
      "O(log n)",
      "O(n^2)"
    ],
    "correct_index": 1,
    "explanation": "เมื่อลบสมาชิกตัวแรกออก สมาชิกที่เหลือทั้งหมด (n-1 ตัว) ต้องถูกเลื่อนไปทางซ้ายหนึ่งตำแหน่งเพื่อปิดช่องว่าง จึงมี Time Complexity เป็น O(n) ซึ่งเป็นกรณีเลวร้ายที่สุดของการลบข้อมูลใน Array"
  },
  {
    "question": "การแทรกสมาชิกใหม่ที่ตำแหน่งท้ายสุดของ Array (กรณีที่ยังมีพื้นที่ว่างเหลืออยู่) มี Time Complexity เท่าใด",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n^2)"
    ],
    "correct_index": 2,
    "explanation": "หาก Array ยังมีพื้นที่ว่างเหลืออยู่ การแทรกสมาชิกที่ตำแหน่งท้ายสุดทำได้โดยเพิ่มค่าเข้าไปที่ index ถัดไปทันที โดยไม่ต้องเลื่อนสมาชิกตัวอื่นเลย จึงมี Time Complexity เป็น O(1) ต่างจากการแทรกกลางหรือต้นอาร์เรย์ที่ต้องเลื่อนข้อมูล"
  },
  {
    "question": "เมื่อ Dynamic Array (เช่น ArrayList) มีพื้นที่เต็มและต้องขยายขนาดโดยสร้าง array ใหม่แล้วคัดลอกข้อมูลเดิมทั้งหมดไปเก็บ การคัดลอกข้อมูลนี้มี Time Complexity เท่าใด",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n) เพราะต้องคัดลอกสมาชิกเดิมทั้งหมด n ตัวไปยัง array ใหม่",
      "O(n^2)"
    ],
    "correct_index": 2,
    "explanation": "เมื่อพื้นที่เดิมเต็ม ระบบต้องสร้าง array ใหม่ที่ใหญ่ขึ้นแล้วคัดลอกสมาชิกทั้งหมด n ตัวจาก array เดิมไปยัง array ใหม่ทีละตัว จึงมี Time Complexity เป็น O(n) สำหรับการขยายครั้งนั้น แม้ว่าโดยเฉลี่ยแล้ว (amortized) การ insert ปกติยังคงเป็น O(1) เพราะการขยายไม่ได้เกิดขึ้นทุกครั้ง"
  },
  {
    "question": "กำหนด array = [5, 3, 8, 1] หากทำการสลับค่า (swap) ระหว่าง arr[0] และ arr[3] ผลลัพธ์ของ array หลัง swap คือข้อใด",
    "options": [
      "[5, 3, 8, 1]",
      "[1, 3, 8, 5]",
      "[8, 3, 5, 1]",
      "[1, 8, 3, 5]"
    ],
    "correct_index": 1,
    "explanation": "การ swap arr[0] กับ arr[3] คือการสลับค่าระหว่างตำแหน่งแรก (5) กับตำแหน่งสุดท้าย (1) เท่านั้น ตำแหน่งกลาง (index 1 และ 2) ไม่เปลี่ยนแปลง ผลลัพธ์จึงเป็น [1, 3, 8, 5]"
  },
  {
    "question": "ข้อใดต่อไปนี้ไม่ใช่คุณสมบัติของ Array (Static Array)",
    "options": [
      "เข้าถึงข้อมูลด้วย index ได้แบบ O(1)",
      "เก็บข้อมูลชนิดเดียวกันไว้ด้วยกัน",
      "จองพื้นที่หน่วยความจำแบบต่อเนื่อง (contiguous)",
      "ขนาดสามารถขยายหรือลดได้อัตโนมัติโดยไม่มีค่าใช้จ่ายด้านเวลาเลย"
    ],
    "correct_index": 3,
    "explanation": "ข้อความในตัวเลือกที่ 4 ไม่ถูกต้อง เพราะ Static Array มีขนาดคงที่ตายตัวตั้งแต่ประกาศ ไม่สามารถขยายหรือลดขนาดได้เองโดยอัตโนมัติ หากต้องการเปลี่ยนขนาดต้องสร้าง array ใหม่และคัดลอกข้อมูล ซึ่งมีค่าใช้จ่ายด้านเวลาเป็น O(n) ส่วนตัวเลือกอื่นเป็นคุณสมบัติที่ถูกต้องของ Array"
  },
  {
    "type": "fill_blank",
    "question": "การลบสมาชิกที่ตำแหน่งแรกสุดของ Array ที่มีสมาชิก n ตัว มี Time Complexity เท่าใด (ตอบในรูปแบบ Big-O)",
    "answer": "O(n)",
    "accepted_answers": ["O(n)", "o(n)", "linear time"],
    "explanation": "เพราะเมื่อลบสมาชิกตัวแรกออก สมาชิกที่เหลือทั้งหมดต้องถูกเลื่อนไปทางซ้ายหนึ่งตำแหน่งเพื่อปิดช่องว่าง ทำให้มี Time Complexity เป็น O(n)"
  },
  {
    "type": "fill_blank",
    "question": "กำหนด Array สองมิติแบบ Row-Major, Base Address = 2000, ขนาดสมาชิก = 4 bytes, จำนวนคอลัมน์ทั้งหมด = 4 จงหา Address ของสมาชิกที่ [1][2] (ตอบเป็นตัวเลข)",
    "answer": "2024",
    "accepted_answers": ["2024"],
    "explanation": "ใช้สูตร Address = Base + (row × n + col) × size = 2000 + (1×4 + 2) × 4 = 2000 + 6×4 = 2000 + 24 = 2024"
  },
      ]
    },
    {
      "chapter_id": "chapter_linked_list",
      "chapter_name": "บทที่ 3 Linked List (Singly, Doubly, Circular)",
      "questions": [
        {
          "question": "Node ของ Singly Linked List ประกอบด้วยส่วนใดบ้าง",
          "options": [
            "INFO และ LINK เท่านั้น (ข้อมูล และตัวชี้ไป node ถัดไป)",
            "LLINK, INFO และ RLINK",
            "Key, Value และ Hash",
            "Index และ Value เท่านั้น"
          ],
          "correct_index": 0,
          "explanation": "Node ของ Singly Linked List มีสองส่วนคือ INFO (เก็บข้อมูลจริง) และ LINK (pointer ชี้ไปยัง node ถัดไปเพียงทิศทางเดียว) ต่างจาก Doubly Linked List ที่มี pointer สองทิศทาง (LLINK และ RLINK)"
        },
        {
          "question": "Node ของ Doubly Linked List มีโครงสร้างตามข้อใด",
          "options": [
            "INFO : LINK",
            "LLINK : INFO : RLINK",
            "Key : INFO",
            "Head : Tail : INFO"
          ],
          "correct_index": 1,
          "explanation": "Doubly Linked List แต่ละ node มี pointer สองตัวคือ LLINK (ชี้ไป node ก่อนหน้า) และ RLINK (ชี้ไป node ถัดไป) ล้อมรอบส่วนข้อมูล INFO ทำให้สามารถเดินไปข้างหน้าหรือย้อนกลับได้ทั้งสองทิศทาง ต่างจาก Singly Linked List ที่เดินได้ทิศทางเดียว"
        },
        {
          "question": "ข้อใดคือข้อดีของ Linked List เมื่อเทียบกับ Array",
          "options": [
            "เข้าถึงข้อมูลแบบสุ่ม (random access) ได้เร็วกว่า",
            "ใช้หน่วยความจำต่อสมาชิกน้อยกว่าเสมอ",
            "ขนาดยืดหยุ่น เพิ่ม/ลบสมาชิกได้โดยไม่ต้องเลื่อนข้อมูลจำนวนมากเหมือน Array",
            "คำนวณตำแหน่งสมาชิกด้วยสูตรคณิตศาสตร์ได้โดยตรง"
          ],
          "correct_index": 2,
          "explanation": "จุดเด่นของ Linked List คือขนาดที่ยืดหยุ่น สามารถเพิ่มหรือลบ node ได้โดยเพียงปรับ pointer เท่านั้น ไม่ต้องเลื่อนข้อมูลจำนวนมากเหมือนกรณีของ Array ส่วนการเข้าถึงแบบสุ่มและการคำนวณตำแหน่งด้วยสูตรเป็นจุดเด่นของ Array ไม่ใช่ Linked List"
        },
        {
          "question": "การแทรกข้อมูลใหม่ที่ตำแหน่งหัว (head) ของ Singly Linked List มี Time Complexity เท่าใด",
          "options": [
            "O(n)",
            "O(1)",
            "O(log n)",
            "O(n^2)"
          ],
          "correct_index": 1,
          "explanation": "การแทรก node ใหม่ที่ตำแหน่ง head ทำได้โดยสร้าง node ใหม่ ให้ LINK ของมันชี้ไปที่ head เดิม แล้วปรับ head ให้ชี้มาที่ node ใหม่ ซึ่งเป็นการปรับ pointer เพียงไม่กี่ตัว ไม่ขึ้นกับจำนวนสมาชิกในลิสต์ จึงมี Time Complexity เป็น O(1)"
        },
        {
          "question": "การค้นหาข้อมูลที่ตำแหน่งที่ n ของ Linked List (นับจาก head) มี Time Complexity เท่าใดในกรณีทั่วไป",
          "options": [
            "O(1) เพราะ Linked List เข้าถึงด้วย index ได้โดยตรงเหมือน Array",
            "O(n) เพราะต้อง traverse ไล่ตาม pointer ทีละ node จนกว่าจะถึงตำแหน่งที่ต้องการ",
            "O(log n) เพราะใช้วิธี binary search",
            "O(1) เสมอไม่ว่ากรณีใด"
          ],
          "correct_index": 1,
          "explanation": "Linked List ไม่มีตำแหน่งหน่วยความจำที่ต่อเนื่องกันเหมือน Array จึงไม่สามารถคำนวณตำแหน่งได้โดยตรง ต้องเริ่มจาก head แล้วไล่ตาม pointer ไปทีละ node จนถึงตำแหน่งที่ n ในกรณีเลวร้ายที่สุดต้องไล่ n ครั้ง จึงมี Time Complexity เป็น O(n)"
        },
        {
          "question": "ลักษณะพิเศษของ Circular Linked List คือข้อใด",
          "options": [
            "node สุดท้ายมี LINK เป็น NULL เสมอเหมือน Linked List ทั่วไป",
            "node สุดท้ายชี้ย้อนกลับไปยัง node แรกของลิสต์ ทำให้เดินวนเป็นวงกลมได้ไม่รู้จบ",
            "ไม่มี node แรกและ node สุดท้าย",
            "ต้องมี pointer สองทิศทางเสมอ"
          ],
          "correct_index": 1,
          "explanation": "จุดเด่นของ Circular Linked List คือ LINK ของ node สุดท้ายจะไม่เป็น NULL แต่จะชี้กลับไปยัง node แรก ทำให้สามารถเดินวนไปเรื่อยๆ ได้โดยไม่มีจุดสิ้นสุด เหมาะกับงานที่ต้องวนซ้ำ เช่น การจัดคิวแบบวนรอบ (round-robin scheduling)"
        },
        {
          "question": "ข้อใดคือข้อเสียของ Linked List เมื่อเทียบกับ Array",
          "options": [
            "ไม่สามารถเข้าถึงข้อมูลแบบสุ่ม (random access) ได้โดยตรง ต้อง traverse จาก head ไปเรื่อยๆ เพื่อหาตำแหน่งที่ต้องการ",
            "ไม่สามารถเพิ่มหรือลบข้อมูลได้เลยหลังจากสร้างแล้ว",
            "ต้องกำหนดขนาดสูงสุดตั้งแต่แรกเหมือน Array",
            "ไม่สามารถเก็บข้อมูลชนิดตัวเลขได้"
          ],
          "correct_index": 0,
          "explanation": "เพราะ node ของ Linked List กระจายอยู่ในหน่วยความจำและเชื่อมกันด้วย pointer เท่านั้น จึงไม่สามารถคำนวณตำแหน่งของสมาชิกที่ต้องการได้โดยตรงเหมือน Array ต้องไล่ traverse จาก head ไปทีละ node ทำให้การเข้าถึงข้อมูลช้ากว่า Array ในกรณีที่ต้องการเข้าถึงตำแหน่งกลางๆ ของลิสต์"
        },
        {
          "question": "สมมติมี Singly Linked List: A -> B -> C -> D และต้องการลบ node B ออก ต้องทำการปรับ pointer ใดเพื่อให้ลิสต์ยังคงเชื่อมต่อกันถูกต้อง",
          "options": [
            "ปรับ LINK ของ D ให้ชี้ไปที่ A",
            "ปรับ LINK ของ A (node ก่อนหน้า B) ให้ชี้ข้าม B ไปชี้ที่ C โดยตรง",
            "ปรับ LINK ของ C ให้ชี้ไปที่ A",
            "ไม่ต้องปรับ pointer ใดเลย เพียงลบข้อมูลใน B ทิ้ง"
          ],
          "correct_index": 1,
          "explanation": "การลบ node กลางลิสต์ต้องปรับ pointer ของ node ก่อนหน้า (A) ให้ข้ามตัวที่จะลบ (B) ไปชี้ที่ node ถัดไป (C) โดยตรง เพื่อให้สายโซ่การเชื่อมโยงยังคงต่อเนื่องกัน จาก A -> B -> C -> D จะกลายเป็น A -> C -> D ส่วน node B จะถูกปล่อยให้ garbage collector จัดการหรือคืนหน่วยความจำต่อไป"
        },
        {
          "type": "fill_blank",
          "question": "โครงสร้าง node ของ Singly Linked List เขียนแทนด้วยส่วนข้อมูล (INFO) และส่วนตัวชี้ไป node ถัดไปเรียกว่าอะไร (ตอบเป็นภาษาอังกฤษ)",
          "answer": "LINK",
          "accepted_answers": ["LINK", "link", "Link", "Next", "next", "pointer", "Pointer"],
          "explanation": "Node ของ Singly Linked List ประกอบด้วย INFO (ข้อมูล) และ LINK (หรือเรียกว่า Next/Pointer) ที่ชี้ไปยัง node ถัดไปเพียงทิศทางเดียวเท่านั้น"
        },
        {
          "type": "fill_blank",
          "question": "Time Complexity ในการค้นหาข้อมูลใน Linked List (Big-O) คือเท่าใด",
          "answer": "O(n)",
          "accepted_answers": ["O(n)", "o(n)", "linear time"],
          "explanation": "เพราะต้อง traverse ไล่ตาม pointer จาก head ไปทีละ node จนกว่าจะพบข้อมูลที่ต้องการ ในกรณีเลวร้ายที่สุดต้องไล่จนถึง node สุดท้าย จึงมี Time Complexity เป็น O(n) ต่างจาก Array ที่เข้าถึงด้วย index ได้โดยตรงแบบ O(1)"
        },
          {
    "question": "การลบ node สุดท้ายของ Singly Linked List (ที่ไม่มี tail pointer) ต้องทำอย่างไร",
    "options": [
      "ตั้ง LINK ของ node แรกให้เป็น NULL ทันที",
      "ต้อง traverse จาก head ไปจนถึง node ก่อนสุดท้าย แล้วตั้งค่า LINK ของ node นั้นให้เป็น NULL",
      "ลบข้อมูลใน INFO ของ node สุดท้ายทิ้งโดยไม่ต้องปรับ pointer ใดๆ",
      "ไม่สามารถลบ node สุดท้ายของ Singly Linked List ได้"
    ],
    "correct_index": 1,
    "explanation": "เนื่องจาก Singly Linked List เดินได้ทิศทางเดียว หากไม่มี tail pointer จึงต้องเริ่ม traverse จาก head ไล่ไปทีละ node จนถึง node ก่อนสุดท้าย (node ที่ LINK ชี้ไปยัง node สุดท้าย) แล้วปรับ LINK ของ node นั้นให้เป็น NULL แทน เพื่อตัด node สุดท้ายออกจากลิสต์"
  },
  {
    "question": "ข้อใดคือข้อดีของ Doubly Linked List เมื่อเทียบกับ Singly Linked List",
    "options": [
      "ใช้หน่วยความจำน้อยกว่า Singly Linked List เสมอ",
      "สามารถเดินย้อนกลับ (traverse ทั้งสองทิศทาง) และลบ node ได้รวดเร็วขึ้นโดยไม่ต้องไล่หา node ก่อนหน้า เพราะมี pointer ชี้กลับอยู่แล้ว",
      "เข้าถึงข้อมูลแบบสุ่มได้เร็วเท่ากับ Array",
      "ไม่จำเป็นต้องมี pointer เลย"
    ],
    "correct_index": 1,
    "explanation": "จุดเด่นของ Doubly Linked List คือมี pointer สองทิศทาง (LLINK และ RLINK) ทำให้สามารถเดินย้อนกลับได้ และเมื่อต้องการลบ node ใดๆ ก็สามารถเข้าถึง node ก่อนหน้าได้โดยตรงผ่าน LLINK โดยไม่ต้อง traverse หาใหม่เหมือน Singly Linked List ที่ต้องไล่หา node ก่อนหน้าทุกครั้ง"
  },
  {
    "question": "ข้อใดคือข้อเสียของ Doubly Linked List เมื่อเทียบกับ Singly Linked List",
    "options": [
      "ไม่สามารถแทรกหรือลบ node ได้เลย",
      "ใช้หน่วยความจำมากกว่า เนื่องจากแต่ละ node ต้องเก็บ pointer เพิ่มอีกหนึ่งตัว (LLINK) นอกเหนือจาก RLINK",
      "เข้าถึงข้อมูลด้วย index ได้เร็วกว่า Array",
      "ไม่สามารถเดินไปข้างหน้าได้"
    ],
    "correct_index": 1,
    "explanation": "เพราะ node ของ Doubly Linked List ต้องเก็บ pointer สองตัว (LLINK และ RLINK) แทนที่จะเป็นตัวเดียวเหมือน Singly Linked List (LINK) จึงใช้หน่วยความจำต่อ node มากกว่า แม้จะได้ความสามารถในการเดินย้อนกลับและลบ node ได้เร็วขึ้นเป็นการแลกเปลี่ยน"
  },
  {
    "question": "Circular Doubly Linked List มีลักษณะพิเศษตามข้อใด",
    "options": [
      "มี pointer เพียงทิศทางเดียวเหมือน Circular Singly Linked List",
      "node แรกและ node สุดท้ายเชื่อมโยงถึงกันทั้งสองทิศทาง (RLINK ของตัวสุดท้ายชี้ไปตัวแรก และ LLINK ของตัวแรกชี้ไปตัวสุดท้าย) ทำให้เดินวนได้ทั้งสองทิศทาง",
      "ไม่มี node แรกและ node สุดท้าย",
      "ไม่สามารถแทรกหรือลบ node ได้"
    ],
    "correct_index": 1,
    "explanation": "Circular Doubly Linked List รวมคุณสมบัติของทั้ง Circular และ Doubly เข้าด้วยกัน คือ node สุดท้ายมี RLINK ชี้กลับไปยัง node แรก และ node แรกมี LLINK ชี้ไปยัง node สุดท้าย ทำให้สามารถเดินวนไปข้างหน้าหรือย้อนกลับได้อย่างต่อเนื่องไม่มีที่สิ้นสุดทั้งสองทิศทาง"
  },
  {
    "question": "กำหนด Singly Linked List: A -> B -> C -> NULL หากต้องการแทรก node ใหม่ชื่อ X ไว้ระหว่าง B กับ C ผลลัพธ์ของลิสต์หลังแทรกคือข้อใด",
    "options": [
      "A -> X -> B -> C -> NULL",
      "A -> B -> X -> C -> NULL",
      "A -> B -> C -> X -> NULL",
      "X -> A -> B -> C -> NULL"
    ],
    "correct_index": 1,
    "explanation": "การแทรก X ระหว่าง B กับ C ต้องปรับ LINK ของ B ให้ชี้ไปที่ X แทนที่จะชี้ไปที่ C โดยตรง แล้วให้ LINK ของ X ชี้ไปที่ C ผลลัพธ์คือ A -> B -> X -> C -> NULL ซึ่งยังคงรักษาลำดับเดิมของ A, B, C ไว้ เพียงแต่แทรก X คั่นกลางระหว่าง B และ C"
  },
  {
    "question": "การ Reverse (กลับทิศทาง) Singly Linked List ต้องทำการปรับเปลี่ยนอย่างไร",
    "options": [
      "ลบ node ทั้งหมดแล้วสร้างใหม่ตามลำดับย้อนกลับ",
      "ปรับ LINK ของแต่ละ node ให้ชี้ไปยัง node ก่อนหน้าแทนที่จะชี้ไปยัง node ถัดไป แล้วสลับตำแหน่ง head ให้เป็น node สุดท้ายเดิม",
      "เปลี่ยนค่า INFO ของแต่ละ node ให้สลับตำแหน่งกัน โดยไม่แตะต้อง pointer",
      "เพิ่ม pointer ใหม่เข้าไปในแต่ละ node โดยไม่ปรับ LINK เดิม"
    ],
    "correct_index": 1,
    "explanation": "การ reverse linked list ทำได้โดยไล่ traverse ทีละ node แล้วปรับทิศทางของ LINK ให้ชี้ย้อนกลับไปยัง node ก่อนหน้าแทนที่จะชี้ไปข้างหน้าเหมือนเดิม เมื่อทำครบทุก node แล้ว head ใหม่จะกลายเป็น node ที่เดิมอยู่ตำแหน่งสุดท้าย ทำให้ทิศทางการเดินลิสต์กลับด้านทั้งหมด"
  },
  {
    "question": "การแทรก node ใหม่ที่ตำแหน่งท้ายสุด (tail) ของ Singly Linked List ที่ไม่มี tail pointer เก็บไว้ มี Time Complexity เท่าใด",
    "options": [
      "O(1) เพราะแทรกที่ไหนก็ทำได้ทันที",
      "O(n) เพราะต้อง traverse จาก head ไปจนถึง node สุดท้ายก่อนจึงจะแทรกได้",
      "O(log n) เพราะใช้วิธี binary search หาตำแหน่งท้าย",
      "O(n^2)"
    ],
    "correct_index": 1,
    "explanation": "หากไม่มี tail pointer เก็บตำแหน่งท้ายไว้ล่วงหน้า การแทรก node ใหม่ที่ท้ายลิสต์ต้องเริ่มจาก head แล้วไล่ traverse ไปทีละ node จนกว่าจะถึง node สุดท้าย (node ที่ LINK เป็น NULL) จึงจะสามารถแทรก node ใหม่ต่อท้ายได้ ทำให้มี Time Complexity เป็น O(n) แต่หากมี tail pointer เก็บไว้จะลดเหลือ O(1)"
  },
  {
    "question": "เทคนิค Two-pointer แบบ Slow-Fast Pointer (ตัวชี้เดินช้า-เดินเร็ว) มักถูกนำมาใช้กับ Linked List เพื่อจุดประสงค์ใด",
    "options": [
      "เพื่อเรียงลำดับข้อมูลใน Linked List ให้เร็วขึ้น",
      "เพื่อหาตำแหน่งกึ่งกลาง (middle node) ของลิสต์ได้ภายในการ traverse เพียงรอบเดียว โดยไม่ต้องนับความยาวลิสต์ก่อน",
      "เพื่อแปลง Singly Linked List ให้เป็น Doubly Linked List",
      "เพื่อลบ node ที่ซ้ำกันออกจากลิสต์"
    ],
    "correct_index": 1,
    "explanation": "เทคนิค Slow-Fast Pointer ใช้ตัวชี้สองตัวเริ่มจาก head พร้อมกัน โดยตัวช้าเดินทีละ 1 node และตัวเร็วเดินทีละ 2 node เมื่อตัวเร็วไปถึงจุดสิ้นสุดของลิสต์ ตัวช้าจะอยู่ที่ตำแหน่งกึ่งกลางพอดี เทคนิคนี้ยังใช้ตรวจจับ cycle (วงวน) ใน linked list ได้ด้วย (Floyd's Cycle Detection)"
  },
  {
    "type": "fill_blank",
    "question": "การเดินไล่จาก node หนึ่งไปยัง node ถัดไปเพื่อเข้าถึงหรือประมวลผลข้อมูลทีละตัวใน Linked List เรียกว่าอะไร (ภาษาอังกฤษ)",
    "answer": "Traversal",
    "accepted_answers": ["Traversal", "traversal", "Traverse", "traverse"],
    "explanation": "Traversal (การเดินลิสต์) คือกระบวนการไล่เข้าถึง node ทีละตัวตั้งแต่ head จนถึง node สุดท้าย (หรือจนกว่าจะพบเงื่อนไขที่ต้องการ) เป็นการดำเนินการพื้นฐานที่ใช้ในการค้นหา แสดงผล หรือประมวลผลข้อมูลใน Linked List"
  },
  {
    "type": "fill_blank",
    "question": "การลบ node สุดท้ายของ Singly Linked List ที่ไม่มี tail pointer เก็บไว้ มี Time Complexity เท่าใด (ตอบในรูปแบบ Big-O)",
    "answer": "O(n)",
    "accepted_answers": ["O(n)", "o(n)", "linear time"],
    "explanation": "เพราะต้อง traverse จาก head ไปจนถึง node ก่อนสุดท้ายก่อนจึงจะปรับ LINK ให้เป็น NULL ได้ ในกรณีเลวร้ายที่สุดต้องไล่ผ่านเกือบทุก node จึงมี Time Complexity เป็น O(n)"
  },
      ]
    },
    {
      "chapter_id": "chapter_stack",
      "chapter_name": "บทที่ 4 Stack",
      "questions": [
        {
          "question": "Stack เป็นโครงสร้างข้อมูลที่ทำงานตามหลักการใด",
          "options": [
            "FIFO (First In First Out)",
            "LIFO (Last In First Out)",
            "Random Access",
            "Priority-based"
          ],
          "correct_index": 1,
          "explanation": "Stack ทำงานแบบ LIFO คือข้อมูลที่ถูกใส่เข้าไปล่าสุด (Last In) จะถูกนำออกมาเป็นตัวแรก (First Out) เปรียบเหมือนการวางจานซ้อนกัน จานที่วางบนสุดจะถูกหยิบออกก่อนเสมอ"
        },
        {
          "question": "operation พื้นฐานของ Stack ตามข้อใดถูกต้องที่สุด",
          "options": [
            "enqueue และ dequeue",
            "push (เพิ่มข้อมูลด้านบน) และ pop (นำข้อมูลด้านบนสุดออก)",
            "insert และ delete แบบสุ่มตำแหน่ง",
            "front และ rear"
          ],
          "correct_index": 1,
          "explanation": "Stack มี operation หลักคือ push (ใส่ข้อมูลเข้าไปที่ด้านบนสุด/top) และ pop (นำข้อมูลที่อยู่ด้านบนสุดออก) รวมถึง peek/top (ดูค่าบนสุดโดยไม่นำออก) ส่วน enqueue/dequeue เป็น operation ของ Queue ไม่ใช่ Stack"
        },
        {
          "question": "การ push และ pop ข้อมูลใน Stack (ที่ implement ด้วย Array หรือ Linked List แบบ head) มี Time Complexity เท่าใด",
          "options": [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"
          ],
          "correct_index": 2,
          "explanation": "เพราะ push และ pop กระทำที่ตำแหน่งบนสุด (top) ของ Stack เพียงจุดเดียวเท่านั้น ไม่ต้องเลื่อนหรือไล่ค้นหาข้อมูลอื่น จึงมี Time Complexity คงที่เป็น O(1) ไม่ว่า Stack จะมีขนาดใหญ่เพียงใด"
        },
        {
          "question": "จงแปลง infix expression 'A+B*C' ให้เป็น postfix expression โดยใช้หลักการลำดับความสำคัญของ operator (* มีความสำคัญมากกว่า +)",
          "options": [
            "AB+C*",
            "ABC*+",
            "A+BC*",
            "*+ABC"
          ],
          "correct_index": 1,
          "explanation": "เพราะ * มีลำดับความสำคัญสูงกว่า + จึงต้องคำนวณ B*C ก่อน ในรูป postfix การคูณ BC* จะถูกจัดกลุ่มก่อน แล้วจึงตามด้วย + กับ A ผลลัพธ์คือ A BC* + เมื่อเขียนติดกันจะได้ ABC*+ ซึ่งหมายถึง 'เอา A บวกกับผลคูณของ B และ C'"
        },
        {
          "question": "จงแปลง infix expression '(A+B)*C' ให้เป็น postfix expression",
          "options": [
            "AB+C*",
            "ABC+*",
            "A+BC*",
            "AB*C+"
          ],
          "correct_index": 0,
          "explanation": "เพราะมีวงเล็บครอบ A+B ไว้ จึงต้องคำนวณ A+B ก่อนแม้ว่า * จะมีลำดับความสำคัญสูงกว่าปกติ ในรูป postfix จะได้ AB+ (แทน A+B) แล้วตามด้วย C กับ * ผลลัพธ์คือ AB+C* หมายถึง 'เอาผลบวกของ A กับ B ไปคูณกับ C'"
        },
        {
          "question": "กำหนดลำดับการทำงานกับ Stack ดังนี้: push(1), push(2), push(3), pop(), push(4) หลังจากทำครบทุกขั้นตอน ค่าที่อยู่บนสุดของ Stack (top) คือเท่าใด",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "correct_index": 3,
          "explanation": "ไล่ตามลำดับ: push(1) -> Stack = [1], push(2) -> [1,2], push(3) -> [1,2,3], pop() นำ 3 ออก -> [1,2], push(4) -> [1,2,4] ดังนั้นค่าบนสุด (top) ของ Stack หลังทำครบทุกขั้นตอนคือ 4 ซึ่งเป็นค่าที่ถูก push เข้าไปล่าสุด"
        },
        {
          "question": "การใช้ Stack ตรวจสอบว่าวงเล็บในนิพจน์ (เช่น '((A+B)*(C-D))') สมดุลกันหรือไม่ มีหลักการทำงานอย่างไร",
          "options": [
            "นับจำนวนวงเล็บเปิดและปิดแล้วเปรียบเทียบผลรวมเท่านั้น โดยไม่สนใจลำดับ",
            "เมื่อพบวงเล็บเปิดให้ push เข้า Stack เมื่อพบวงเล็บปิดให้ pop ออกมาเปรียบเทียบว่าเป็นคู่กันหรือไม่ ถ้า Stack ว่างพอดีเมื่อจบนิพจน์แสดงว่าวงเล็บสมดุล",
            "อ่านนิพจน์จากขวาไปซ้ายแล้วนับ operator เท่านั้น",
            "ใช้ Queue แทน Stack เพราะให้ผลลัพธ์เหมือนกัน"
          ],
          "correct_index": 1,
          "explanation": "หลักการคือไล่อ่านนิพจน์ทีละตัวอักษร เมื่อพบวงเล็บเปิดให้ push ลง Stack เมื่อพบวงเล็บปิดให้ pop ตัวบนสุดออกมาตรวจว่าจับคู่กันถูกชนิดหรือไม่ หากไม่ตรงกันหรือ Stack ว่างตอนที่เจอวงเล็บปิดแสดงว่าไม่สมดุล และเมื่ออ่านจบนิพจน์แล้ว Stack ต้องว่างพอดีจึงจะถือว่าวงเล็บสมดุลครบถ้วน วิธีนี้ใช้คุณสมบัติ LIFO ของ Stack ในการจับคู่วงเล็บที่ซ้อนกันได้อย่างถูกต้อง"
        },
        {
          "question": "เหตุใดการแปลงเลขฐานสิบเป็นฐานสองด้วยวิธีหารสั้นจึงต้องใช้ Stack แทนที่จะเก็บเศษลงใน Array แล้วอ่านจากซ้ายไปขวาตามลำดับที่ได้",
          "options": [
            "เพราะ Stack ใช้ syntax เขียนโค้ดสั้นกว่า Array",
            "เพราะเศษที่ได้จากการหารครั้งแรกคือบิตที่มีนัยสำคัญน้อยที่สุด (LSB) แต่คำตอบต้องแสดงจากบิตที่มีนัยสำคัญมากที่สุด (MSB) ไปน้อยที่สุด Stack (LIFO) จึงช่วยกลับลำดับให้ถูกต้องโดยอัตโนมัติเมื่อ pop ออกมา",
            "เพราะ Array ไม่สามารถเก็บค่า 0 กับ 1 ปนกันได้",
            "เพราะ Stack ทำให้ผลลัพธ์แม่นยำกว่า Array"
          ],
          "correct_index": 1,
          "explanation": "ลำดับเศษที่ได้จากการหารสั้นคือจาก LSB ไป MSB ซึ่งเป็นลำดับตรงข้ามกับที่ต้องแสดงผล การ push เศษแต่ละตัวลง Stack แล้ว pop ออกมาทีละตัวจะได้ลำดับที่ถูกกลับเป็น MSB ไป LSB พอดี ตรงกับรูปแบบเลขฐานสองที่ถูกต้อง ซึ่งเป็นตัวอย่างคลาสสิกของการใช้คุณสมบัติ LIFO ของ Stack ให้เป็นประโยชน์"
        },
        {
          "type": "fill_blank",
          "question": "จงแปลง infix expression 'A*B+C' ให้เป็น postfix expression (เขียนติดกันไม่มีเว้นวรรค เช่น XY+)",
          "answer": "AB*C+",
          "accepted_answers": ["AB*C+", "ab*c+"],
          "explanation": "เพราะ * มีลำดับความสำคัญสูงกว่า + จึงคำนวณ A*B ก่อน ในรูป postfix จะได้ AB* (แทน A*B) แล้วตามด้วย C กับ + ผลลัพธ์คือ AB*C+ หมายถึง 'เอาผลคูณของ A กับ B ไปบวกกับ C'"
        },
        {
          "type": "fill_blank",
          "question": "จงแปลง infix expression 'A+B*C' ให้เป็น prefix expression (เขียนติดกันไม่มีเว้นวรรค)",
          "answer": "+A*BC",
          "accepted_answers": ["+A*BC", "+a*bc"],
          "explanation": "การแปลงเป็น prefix ให้พิจารณา operator ที่มีความสำคัญน้อยที่สุดในนิพจน์ก่อน (คือ +) โดย operator จะถูกวางไว้หน้าตัวถูกดำเนินการเสมอ เนื่องจาก * สำคัญกว่า จึงต้องแปลง B*C เป็น *BC ก่อน แล้วนำ A มารวมกับ + ได้เป็น +A*BC หมายถึง 'บวก A เข้ากับผลคูณของ B และ C' ซึ่งความหมายเดียวกับ postfix ABC*+ แต่เขียนในลำดับ operator-operand ต่างกัน"
        },
          {
    "question": "จงแปลง infix expression 'A-B+C' ให้เป็น postfix expression (operator ที่มี priority เท่ากันให้ประมวลผลจากซ้ายไปขวา)",
    "options": [
      "AB-C+",
      "A-BC+",
      "ABC-+",
      "AB+C-"
    ],
    "correct_index": 0,
    "explanation": "เมื่อ operator มี priority เท่ากัน (- และ + มีลำดับความสำคัญเท่ากัน) ให้ประมวลผลจากซ้ายไปขวาตามลำดับที่ปรากฏ จึงคำนวณ A-B ก่อนเป็น AB- แล้วตามด้วย +C ผลลัพธ์คือ AB-C+ หมายถึง 'เอาผลต่างของ A กับ B ไปบวกกับ C'"
  },
  {
    "question": "จงแปลง infix expression 'A/(B-C)' ให้เป็น postfix expression",
    "options": [
      "AB/C-",
      "ABC-/",
      "A/BC-",
      "BC-A/"
    ],
    "correct_index": 1,
    "explanation": "เนื่องจากมีวงเล็บครอบ B-C ไว้ จึงต้องคำนวณ B-C ก่อน ในรูป postfix จะได้ BC- (แทน B-C) แล้วตามด้วย A กับ / ผลลัพธ์คือ ABC-/ หมายถึง 'เอา A หารด้วยผลต่างของ B กับ C'"
  },
  {
    "question": "การประเมินค่า (evaluate) postfix expression ด้วย Stack มีหลักการทำงานตามข้อใด",
    "options": [
      "อ่านนิพจน์จากซ้ายไปขวา เมื่อพบ operand ให้ push ลง Stack เมื่อพบ operator ให้ pop สอง operand บนสุดออกมาคำนวณ แล้ว push ผลลัพธ์กลับเข้า Stack",
      "อ่านนิพจน์จากขวาไปซ้ายเสมอ แล้ว push operator ก่อน operand",
      "ไม่ต้องใช้ Stack เพียงคำนวณจากซ้ายไปขวาตามลำดับที่ปรากฏ",
      "push operand ทั้งหมดก่อน แล้วจึงค่อย pop มาคำนวณกับ operator ทีหลังสุด"
    ],
    "correct_index": 0,
    "explanation": "การประเมินค่า postfix expression ใช้ Stack โดยไล่อ่านนิพจน์จากซ้ายไปขวา หากพบ operand (ตัวเลข/ตัวแปร) ให้ push ลง Stack ทันที หากพบ operator ให้ pop ค่าบนสุดสอง ค่าออกมาคำนวณตาม operator นั้น แล้ว push ผลลัพธ์ที่ได้กลับเข้า Stack เพื่อใช้ในการคำนวณขั้นถัดไป ทำเช่นนี้จนอ่านนิพจน์จบ ค่าที่เหลืออยู่ใน Stack เพียงตัวเดียวคือคำตอบสุดท้าย"
  },
  {
    "question": "จงประเมินค่า postfix expression '2 3 * 4 +' โดยใช้หลักการ Stack (ตัวเลขคั่นด้วยช่องว่างแทน operand แต่ละตัว)",
    "options": [
      "9",
      "10",
      "14",
      "24"
    ],
    "correct_index": 1,
    "explanation": "ไล่ตามหลักการ: push 2 -> [2], push 3 -> [2,3], พบ * pop 3,2 มาคูณกัน = 6 push กลับ -> [6], push 4 -> [6,4], พบ + pop 4,6 มาบวกกัน = 10 push กลับ -> [10] เมื่ออ่านนิพจน์จบ ค่าที่เหลือใน Stack คือ 10 ซึ่งเป็นคำตอบสุดท้าย"
  },
  {
    "question": "อาการ 'Stack Overflow' ในบริบทของการ implement Stack ด้วย Array ขนาดคงที่ เกิดขึ้นเมื่อใด",
    "options": [
      "เมื่อพยายาม pop ข้อมูลออกขณะที่ Stack ว่างเปล่าอยู่แล้ว",
      "เมื่อพยายาม push ข้อมูลเข้าไปใน Stack ที่มีจำนวนสมาชิกเต็มความจุสูงสุดที่จองไว้แล้ว",
      "เมื่อเรียกใช้ operation peek/top บ่อยเกินไป",
      "เมื่อ Stack ถูกสร้างขึ้นโดยไม่ได้กำหนดขนาด"
    ],
    "correct_index": 1,
    "explanation": "Stack Overflow (ในความหมายของ operation push/pop ปกติ ไม่ใช่ recursion) เกิดขึ้นเมื่อ Stack ที่ implement ด้วย Array ขนาดคงที่มีสมาชิกเต็มความจุสูงสุดแล้ว แต่ยังพยายาม push ข้อมูลเพิ่มเข้าไปอีก ซึ่งไม่มีพื้นที่เหลือให้เก็บ จึงเกิดข้อผิดพลาดนี้"
  },
  {
    "question": "อาการ 'Stack Underflow' เกิดขึ้นเมื่อใด",
    "options": [
      "เมื่อพยายาม push ข้อมูลเข้าไปใน Stack ที่เต็มแล้ว",
      "เมื่อพยายาม pop หรือ peek ข้อมูลออกจาก Stack ในขณะที่ Stack ว่างเปล่าอยู่ ไม่มีสมาชิกให้นำออก",
      "เมื่อ Stack มีขนาดใหญ่เกินไป",
      "เมื่อใช้ push และ pop สลับกันบ่อยเกินไป"
    ],
    "correct_index": 1,
    "explanation": "Stack Underflow เกิดขึ้นเมื่อพยายามเรียก operation pop() หรือ peek() ในขณะที่ Stack ไม่มีสมาชิกเหลืออยู่เลย (ว่างเปล่า) ซึ่งไม่มีข้อมูลให้นำออกมาได้ โปรแกรมที่ดีควรตรวจสอบว่า Stack ว่างหรือไม่ก่อนเรียก pop/peek เสมอเพื่อป้องกันข้อผิดพลาดนี้"
  },
  {
    "question": "การ implement Stack ด้วย Linked List แทนที่จะใช้ Array ขนาดคงที่ มีข้อดีตามข้อใด",
    "options": [
      "เข้าถึงข้อมูลแบบสุ่มได้เร็วกว่า",
      "ไม่มีข้อจำกัดเรื่องขนาดตายตัว จึงไม่เกิด Stack Overflow ตราบใดที่ยังมีหน่วยความจำเหลือให้จองเพิ่ม",
      "ใช้หน่วยความจำน้อยกว่า Array เสมอในทุกกรณี",
      "push และ pop มี Time Complexity ดีกว่า Array"
    ],
    "correct_index": 1,
    "explanation": "การ implement Stack ด้วย Linked List (โดย push/pop ที่ตำแหน่ง head) ทำให้ Stack ขยายขนาดได้แบบไดนามิกตามหน่วยความจำที่มีอยู่ ไม่ผูกติดกับขนาดคงที่เหมือน Array จึงไม่เกิด Stack Overflow จากข้อจำกัดด้านขนาดที่ตั้งไว้ล่วงหน้า แม้ทั้งสองวิธีจะมี push/pop เป็น O(1) เท่ากันก็ตาม"
  },
  {
    "question": "เมื่อโปรแกรมเรียกใช้ฟังก์ชันหนึ่งซ้อนอีกฟังก์ชันหนึ่งไปเรื่อยๆ (function call) ระบบใช้โครงสร้างข้อมูลใดในการจัดการลำดับการเรียกและการกลับมาทำงานต่อ",
    "options": [
      "Queue (Call Queue)",
      "Stack (Call Stack)",
      "Array แบบ static เท่านั้น",
      "Hash Table"
    ],
    "correct_index": 1,
    "explanation": "ทุกครั้งที่มีการเรียกฟังก์ชัน ระบบจะสร้าง stack frame ใหม่และ push ลงใน Call Stack เพื่อเก็บสถานะการทำงาน เมื่อฟังก์ชันทำงานเสร็จจะ pop stack frame นั้นออกและกลับไปทำงานต่อจากจุดที่ค้างไว้ในฟังก์ชันที่เรียก ลักษณะ LIFO นี้ทำให้ฟังก์ชันที่เรียกล่าสุดจะทำงานเสร็จและ return ก่อนเสมอ"
  },
  {
    "type": "fill_blank",
    "question": "จงแปลง infix expression '(A-B)/C' ให้เป็น postfix expression (เขียนติดกันไม่มีเว้นวรรค)",
    "answer": "AB-C/",
    "accepted_answers": ["AB-C/", "ab-c/"],
    "explanation": "เนื่องจากมีวงเล็บครอบ A-B ไว้ ต้องคำนวณ A-B ก่อนแม้ / จะมีลำดับความสำคัญเท่ากับ - ตามปกติ ในรูป postfix จะได้ AB- (แทน A-B) แล้วตามด้วย C กับ / ผลลัพธ์คือ AB-C/ หมายถึง 'เอาผลต่างของ A กับ B ไปหารด้วย C'"
  },
  {
    "type": "fill_blank",
    "question": "จงประเมินค่า postfix expression '3 4 + 2 *' มีค่าเท่าใด (ตอบเป็นตัวเลข)",
    "answer": "14",
    "accepted_answers": ["14"],
    "explanation": "ไล่ตามหลักการ Stack: push 3 -> [3], push 4 -> [3,4], พบ + pop 4,3 มาบวกกัน = 7 push กลับ -> [7], push 2 -> [7,2], พบ * pop 2,7 มาคูณกัน = 14 push กลับ -> [14] ค่าสุดท้ายคือ 14"
  },
      ]
    },
    {
      "chapter_id": "chapter_queue",
      "chapter_name": "บทที่ 5 Queue (รวมถึง Circular Queue, Priority Queue)",
      "questions": [
        {
          "question": "Queue เป็นโครงสร้างข้อมูลที่ทำงานตามหลักการใด",
          "options": [
            "LIFO (Last In First Out)",
            "FIFO (First In First Out)",
            "Random Access",
            "LILO (Last In Last Out) เท่านั้น"
          ],
          "correct_index": 1,
          "explanation": "Queue ทำงานแบบ FIFO คือข้อมูลที่เข้ามาก่อน (First In) จะถูกนำออกไปก่อน (First Out) เปรียบเหมือนการต่อคิวซื้อของ คนที่มาต่อคิวก่อนย่อมได้รับบริการก่อน ต่างจาก Stack ที่ทำงานแบบ LIFO"
        },
        {
          "question": "operation พื้นฐานของ Queue คือข้อใด",
          "options": [
            "push และ pop",
            "enqueue (เพิ่มข้อมูลด้านท้าย/rear) และ dequeue (นำข้อมูลด้านหน้า/front ออก)",
            "insert และ delete แบบสุ่มตำแหน่งใดก็ได้",
            "top และ peek เท่านั้น"
          ],
          "correct_index": 1,
          "explanation": "Queue มี operation หลักคือ enqueue (เพิ่มข้อมูลเข้าที่ด้าน rear หรือด้านท้ายคิว) และ dequeue (นำข้อมูลออกจากด้าน front หรือด้านหน้าคิว) ซึ่งต่างจาก Stack ที่ push/pop กระทำที่ด้านเดียวกัน (top)"
        },
        {
          "question": "Circular Queue ถูกออกแบบขึ้นมาเพื่อแก้ปัญหาใดของ Linear Queue แบบธรรมดาที่ implement ด้วย Array",
          "options": [
            "แก้ปัญหาการเรียงลำดับข้อมูลผิด",
            "แก้ปัญหาการสูญเสียพื้นที่ว่างด้านหน้า (wasted space) หลังจากมีการ dequeue ออกไปหลายครั้ง โดยให้ตำแหน่งท้ายวนกลับมาใช้พื้นที่ว่างด้านหน้าได้",
            "แก้ปัญหาการเข้าถึงข้อมูลช้าเหมือน Linked List",
            "แก้ปัญหาการเก็บข้อมูลชนิดต่างกันปนกัน"
          ],
          "correct_index": 1,
          "explanation": "ใน Linear Queue เมื่อ dequeue ข้อมูลออกจากด้านหน้าไปเรื่อยๆ พื้นที่ด้านหน้าจะว่างแต่ใช้ต่อไม่ได้ (เพราะ rear เดินหน้าอย่างเดียว) ทำให้เปลืองพื้นที่ Circular Queue แก้ปัญหานี้โดยให้ index ของ front และ rear วนกลับมาที่ตำแหน่ง 0 ได้เมื่อถึงจุดสิ้นสุดของ array (โดยใช้ modulo) ทำให้ใช้พื้นที่ทั้งหมดได้อย่างคุ้มค่า"
        },
        {
          "question": "Priority Queue มีลักษณะการทำงานแตกต่างจาก Queue ทั่วไปอย่างไร",
          "options": [
            "ข้อมูลที่ dequeue ออกมาจะเรียงตามลำดับความสำคัญ (priority) ที่กำหนดไว้ ไม่ใช่ตามลำดับเวลาที่เข้ามา (FIFO)",
            "ไม่สามารถเพิ่มข้อมูลใหม่เข้าไปได้หลังจากสร้างครั้งแรก",
            "ทำงานแบบ LIFO เหมือน Stack ทุกประการ",
            "ต้องมีขนาดคงที่และไม่สามารถเปลี่ยนแปลงได้"
          ],
          "correct_index": 0,
          "explanation": "Priority Queue คือ ADT ที่แต่ละสมาชิกมีค่าความสำคัญ (priority) กำกับอยู่ เมื่อ dequeue ข้อมูลที่มี priority สูงสุด (หรือต่ำสุด แล้วแต่การออกแบบ) จะถูกนำออกมาก่อนเสมอ ไม่ว่าจะเข้ามาก่อนหรือหลังก็ตาม ต่างจาก Queue ทั่วไปที่ยึดตามลำดับเวลาเข้า (FIFO) อย่างเคร่งครัด"
        },
        {
          "question": "การ enqueue และ dequeue ของ Queue ที่ implement ด้วย Array และมีตัวแปร front, rear กำกับตำแหน่ง มี Time Complexity เท่าใด",
          "options": [
            "O(n) เพราะต้องเลื่อนข้อมูลทุกครั้ง",
            "O(1) เพราะกระทำที่ตำแหน่ง front หรือ rear เพียงจุดเดียว ไม่ต้องเลื่อนสมาชิกอื่น",
            "O(log n) เพราะต้องค้นหาตำแหน่งที่เหมาะสมก่อน",
            "O(n^2) ในทุกกรณี"
          ],
          "correct_index": 1,
          "explanation": "เมื่อมีตัวแปร front และ rear กำกับตำแหน่งไว้ การ enqueue เพียงเพิ่มข้อมูลที่ตำแหน่ง rear แล้วขยับ rear และการ dequeue เพียงนำข้อมูลที่ตำแหน่ง front ออกแล้วขยับ front โดยไม่ต้องเลื่อนสมาชิกตัวอื่นเลย จึงมี Time Complexity เป็น O(1)"
        },
        {
          "question": "โครงสร้างข้อมูลใดที่นิยมใช้ implement Priority Queue เพื่อให้การ enqueue และ dequeue มีประสิทธิภาพ (Time Complexity ต่ำ) มากที่สุด",
          "options": [
            "Array แบบเรียงลำดับทุกครั้งที่ enqueue",
            "Binary Heap",
            "Singly Linked List แบบไม่เรียงลำดับ",
            "Stack"
          ],
          "correct_index": 1,
          "explanation": "Binary Heap (โดยเฉพาะ Min-Heap หรือ Max-Heap) เป็นโครงสร้างที่นิยมใช้ implement Priority Queue เพราะสามารถ insert และ extract ค่าที่มี priority สูงสุด/ต่ำสุดได้ด้วย Time Complexity O(log n) ซึ่งมีประสิทธิภาพกว่าการใช้ Array ที่เรียงลำดับทุกครั้ง (O(n)) หรือ Linked List ที่ไม่เรียงลำดับซึ่งต้องค้นหาทีละตัว (O(n))"
        },
        {
          "question": "ข้อใดคือตัวอย่างการนำ Queue ไปประยุกต์ใช้ในระบบจริงได้เหมาะสมที่สุด",
          "options": [
            "การจัดการฟังก์ชัน undo/redo ในโปรแกรมแก้ไขข้อความ",
            "การจัดคิวงานพิมพ์ (print spooler) ที่งานพิมพ์ที่ส่งเข้ามาก่อนจะได้พิมพ์ก่อน",
            "การตรวจสอบวงเล็บสมดุลในนิพจน์ทางคณิตศาสตร์",
            "การแปลง infix เป็น postfix expression"
          ],
          "correct_index": 1,
          "explanation": "Print spooler เป็นตัวอย่างคลาสสิกของการใช้ Queue เพราะงานพิมพ์ที่ผู้ใช้ส่งเข้ามาก่อนควรได้รับการพิมพ์ก่อนตามลำดับ (FIFO) ส่วนตัวเลือกอื่นอย่าง undo/redo, ตรวจสอบวงเล็บ, และแปลง infix-postfix ล้วนเป็นการประยุกต์ใช้ Stack ไม่ใช่ Queue"
        },
        {
          "question": "กำหนด Circular Queue ขนาด 5 ช่อง (index 0-4) มี front = 3, rear = 3 (คิวว่างเปล่า) หากทำการ enqueue ข้อมูล 2 ตัวติดกัน ตำแหน่ง rear ใหม่จะอยู่ที่ index ใด (ใช้สูตร rear = (rear+1) mod ขนาด ในการขยับก่อน insert)",
          "options": [
            "index 0",
            "index 4",
            "index 5",
            "index 3"
          ],
          "correct_index": 0,
          "explanation": "เริ่มจาก rear = 3 เมื่อ enqueue ตัวแรก: rear = (3+1) mod 5 = 4 เมื่อ enqueue ตัวที่สอง: rear = (4+1) mod 5 = 5 mod 5 = 0 ดังนั้นตำแหน่ง rear หลัง enqueue 2 ครั้งจะวนกลับมาที่ index 0 นี่คือหลักการ modulo ที่ทำให้ Circular Queue ใช้พื้นที่ได้เต็มประสิทธิภาพโดยไม่เสียพื้นที่เหมือน Linear Queue"
        },
        {
          "type": "fill_blank",
          "question": "หลักการทำงานของ Queue เรียกเป็นตัวย่อภาษาอังกฤษว่าอะไร (4 ตัวอักษร)",
          "answer": "FIFO",
          "accepted_answers": ["FIFO", "fifo", "Fifo"],
          "explanation": "Queue ทำงานแบบ FIFO (First In First Out) คือข้อมูลที่เข้ามาก่อนจะถูกนำออกก่อน ตรงข้ามกับ Stack ที่ทำงานแบบ LIFO"
        },
        {
          "type": "fill_blank",
          "question": "โครงสร้างข้อมูลที่นิยมใช้ implement Priority Queue อย่างมีประสิทธิภาพ (Time Complexity O(log n) ในการ insert/extract) คืออะไร (ตอบเป็นภาษาอังกฤษ)",
          "answer": "Heap",
          "accepted_answers": ["Heap", "heap", "Binary Heap", "binary heap"],
          "explanation": "Binary Heap เป็นโครงสร้างข้อมูลรูปแบบ Tree ที่มีคุณสมบัติพิเศษ (heap property) ทำให้สามารถ insert และดึงค่าที่มี priority สูงสุด/ต่ำสุดออกมาได้อย่างรวดเร็วด้วย Time Complexity O(log n) จึงเป็นตัวเลือกยอดนิยมสำหรับ implement Priority Queue"
        },
          {
    "question": "Double-ended Queue (Deque) คือโครงสร้างข้อมูลที่มีลักษณะตามข้อใด",
    "options": [
      "คิวที่สามารถ enqueue และ dequeue ได้จากทั้งสองด้าน (ด้านหน้าและด้านหลัง)",
      "คิวที่มีข้อมูลเพียงตัวเดียวเสมอ",
      "คิวที่ทำงานแบบ LIFO เหมือน Stack ทุกประการ",
      "คิวที่ไม่สามารถลบข้อมูลออกได้เลย"
    ],
    "correct_index": 0,
    "explanation": "Deque (อ่านว่า 'เด็ก') ย่อมาจาก Double-Ended Queue เป็น ADT ที่อนุญาตให้เพิ่มและลบข้อมูลได้จากทั้งสองด้าน คือด้านหน้า (front) และด้านหลัง (rear) ทำให้มีความยืดหยุ่นมากกว่า Queue ทั่วไปที่เพิ่มได้เฉพาะด้านหลังและลบได้เฉพาะด้านหน้าเท่านั้น"
  },
  {
    "question": "ข้อเสียหลักของ Linear Queue ที่ implement ด้วย Array (ไม่ใช่ Circular) คือข้อใด",
    "options": [
      "ไม่สามารถเพิ่มข้อมูลได้เลยตั้งแต่แรก",
      "หลังจาก dequeue ข้อมูลออกจากด้านหน้าไปหลายครั้ง พื้นที่ด้านหน้าที่ว่างลงจะไม่สามารถนำกลับมาใช้ได้อีก ทำให้เสียพื้นที่โดยเปล่าประโยชน์",
      "ไม่สามารถเก็บข้อมูลชนิดตัวเลขได้",
      "การ enqueue มี Time Complexity เป็น O(n) เสมอ"
    ],
    "correct_index": 1,
    "explanation": "ใน Linear Queue ตำแหน่ง rear เดินหน้าทางเดียวไม่มีวันย้อนกลับ เมื่อ dequeue ข้อมูลออกจากด้านหน้า (front เดินหน้าตาม) พื้นที่ด้านหน้าที่ว่างลงจะไม่ถูกนำกลับมาใช้อีก แม้ว่าพื้นที่ทั้งหมดของ array จะยังไม่เต็มก็ตาม ทำให้เกิดการใช้พื้นที่ไม่คุ้มค่า ปัญหานี้ถูกแก้ด้วย Circular Queue"
  },
  {
    "question": "ใน Circular Queue ที่ implement ด้วย Array ขนาด size เงื่อนไขที่ใช้ตรวจสอบว่าคิว 'เต็ม' (มักใช้ในรูปแบบพื้นฐานที่เสียสละพื้นที่ 1 ช่อง) คือข้อใด",
    "options": [
      "front == rear",
      "(rear + 1) mod size == front",
      "front == 0",
      "rear == size - 1 เท่านั้น"
    ],
    "correct_index": 1,
    "explanation": "ในการ implement Circular Queue แบบพื้นฐานที่แยกแยะสถานะ 'เต็ม' กับ 'ว่าง' ออกจากกัน (โดยยอมเสียพื้นที่ 1 ช่องไม่ใช้งาน) เงื่อนไขที่บ่งบอกว่าคิวเต็มคือ (rear + 1) mod size == front เพราะหมายความว่าตำแหน่งถัดไปที่จะ enqueue ได้นั้นชนกับตำแหน่ง front พอดี ทำให้ไม่มีที่ว่างเหลือให้เพิ่มข้อมูลอีก"
  },
  {
    "question": "ใน Circular Queue แบบพื้นฐาน เงื่อนไขที่ใช้ตรวจสอบว่าคิว 'ว่าง' คือข้อใด",
    "options": [
      "(rear + 1) mod size == front",
      "front == rear",
      "rear == size - 1",
      "front == size - 1"
    ],
    "correct_index": 1,
    "explanation": "ในการ implement Circular Queue แบบพื้นฐาน เงื่อนไขที่บ่งบอกว่าคิวว่างเปล่าคือ front == rear เพราะหมายความว่าไม่มีข้อมูลใดๆ อยู่ระหว่างตำแหน่งทั้งสอง ซึ่งเป็นเงื่อนไขเดียวกับตอนเริ่มต้นก่อนมีการ enqueue ใดๆ เลย จึงต้องออกแบบ logic ให้แยกแยะระหว่างสถานะ 'ว่าง' กับ 'เต็ม' ให้ถูกต้อง"
  },
  {
    "question": "หากมีข้อมูลหลายรายการใน Priority Queue ที่มีค่า priority เท่ากันพอดี การ implement ที่ดีมักจัดการลำดับการนำออกอย่างไร",
    "options": [
      "สุ่มลำดับการนำออกโดยไม่มีกฎเกณฑ์",
      "นำรายการที่เข้ามาก่อน (ตามลำดับเวลา) ออกก่อน เป็นการรักษาหลักการ FIFO ระหว่างรายการที่ priority เท่ากัน (stable)",
      "นำรายการที่เข้ามาหลังสุดออกก่อนเสมอ",
      "ปฏิเสธไม่รับรายการที่มี priority ซ้ำกัน"
    ],
    "correct_index": 1,
    "explanation": "การ implement Priority Queue ที่ดี (แบบ stable) เมื่อพบรายการที่มีค่า priority เท่ากัน มักจะยึดหลักการ FIFO เพิ่มเติมคือรายการที่เข้าคิวก่อนจะถูกนำออกก่อน เพื่อความยุติธรรมและพฤติกรรมที่คาดเดาได้ ไม่ใช่การสุ่มหรือกลับลำดับ"
  },
  {
    "question": "กำหนด Circular Queue ขนาด 4 ช่อง (index 0-3) เริ่มต้น front=0, rear=0 (คิวว่างเปล่า) หากทำการ enqueue ข้อมูล A, B, C ติดต่อกัน (ใช้สูตร rear = (rear+1) mod 4 ก่อน insert) ตำแหน่ง rear สุดท้ายอยู่ที่ index ใด",
    "options": [
      "index 2",
      "index 3",
      "index 0",
      "index 1"
    ],
    "correct_index": 1,
    "explanation": "เริ่มจาก rear=0: enqueue A -> rear=(0+1)mod4=1, enqueue B -> rear=(1+1)mod4=2, enqueue C -> rear=(2+1)mod4=3 ดังนั้นหลัง enqueue ครบ 3 ครั้ง ตำแหน่ง rear สุดท้ายอยู่ที่ index 3"
  },
  {
    "question": "Algorithm การค้นหาแบบ Breadth First Search (BFS) บน Graph หรือ Tree ใช้โครงสร้างข้อมูลใดเป็นหลักในการจัดลำดับการเยี่ยมชม node",
    "options": [
      "Stack",
      "Queue",
      "Array แบบเรียงลำดับ",
      "ไม่ต้องใช้โครงสร้างข้อมูลเสริมใดๆ เลย"
    ],
    "correct_index": 1,
    "explanation": "BFS ใช้ Queue ในการเก็บ node ที่รอการเยี่ยมชม โดยเริ่มจาก node เริ่มต้น enqueue เข้าคิว จากนั้น dequeue ออกมาเยี่ยมชมแล้ว enqueue node ข้างเคียงทั้งหมดที่ยังไม่เคยเยี่ยมชมเข้าคิวต่อ ทำเช่นนี้ไปเรื่อยๆ หลักการ FIFO ของ Queue ทำให้ BFS เยี่ยมชม node ตามระดับความลึก (level) จากใกล้ไปไกลตามลำดับ ต่างจาก DFS ที่ใช้ Stack"
  },
  {
    "question": "ข้อใดคือตัวอย่างการประยุกต์ใช้ Priority Queue ในระบบจริงได้เหมาะสมที่สุด",
    "options": [
      "การจัดคิวรับบริการที่ธนาคารตามลำดับก่อน-หลังที่มาถึงเท่านั้น",
      "การจัดคิวผู้ป่วยในห้องฉุกเฉินของโรงพยาบาล โดยผู้ป่วยที่มีอาการรุนแรงกว่าจะได้รับการรักษาก่อน แม้จะมาถึงทีหลัง",
      "การจัดคิวงานพิมพ์เอกสารที่พิมพ์ตามลำดับเวลาที่ส่งเข้ามาเท่านั้น",
      "การจัดเรียงหนังสือในห้องสมุดตามลำดับตัวอักษร"
    ],
    "correct_index": 1,
    "explanation": "การจัดคิวผู้ป่วยฉุกเฉิน (Triage) เป็นตัวอย่างคลาสสิกของ Priority Queue เพราะผู้ป่วยที่มีอาการรุนแรงกว่า (priority สูงกว่า) จะได้รับการรักษาก่อน แม้จะมาถึงห้องฉุกเฉินทีหลังผู้ป่วยอาการเบากว่าที่มาก่อนก็ตาม ต่างจากคิวธนาคารหรือคิวงานพิมพ์ที่ยึดหลัก FIFO ตามลำดับเวลาอย่างเคร่งครัด ซึ่งเป็นพฤติกรรมของ Queue ทั่วไป ไม่ใช่ Priority Queue"
  },
  {
    "type": "fill_blank",
    "question": "โครงสร้างข้อมูลประเภท Queue ที่สามารถ enqueue และ dequeue ได้จากทั้งสองด้าน (หน้าและหลัง) เรียกว่าอะไร (ภาษาอังกฤษ)",
    "answer": "Deque",
    "accepted_answers": ["Deque", "deque", "Double-ended Queue", "double-ended queue", "Double Ended Queue"],
    "explanation": "Deque (Double-Ended Queue) คือ ADT ที่ผสมคุณสมบัติของ Stack และ Queue เข้าด้วยกัน สามารถเพิ่มหรือลบข้อมูลได้จากทั้งด้านหน้าและด้านหลัง ทำให้มีความยืดหยุ่นในการใช้งานมากกว่า Queue แบบธรรมดา"
  },
  {
    "type": "fill_blank",
    "question": "Algorithm การค้นหาแบบ Breadth First Search ใช้โครงสร้างข้อมูลใดเป็นหลักในการจัดการลำดับการเยี่ยมชม node (ภาษาอังกฤษ)",
    "answer": "Queue",
    "accepted_answers": ["Queue", "queue"],
    "explanation": "BFS ใช้ Queue เก็บ node ที่รอเยี่ยมชม เพื่อให้เยี่ยมชม node ตามลำดับระดับความลึกจากใกล้ไปไกล ซึ่งเป็นคุณสมบัติ FIFO ของ Queue ที่ทำให้ node ที่ค้นพบก่อนจะถูกประมวลผลก่อน"
  },
      ]
    },
    {
      "chapter_id": "chapter_recursion",
      "chapter_name": "บทที่ 6 Recursion",
      "questions": [
        {
          "question": "Recursion (การเรียกซ้ำ) คืออะไร",
          "options": [
            "การเขียนลูป for หรือ while เพื่อทำงานซ้ำๆ",
            "ฟังก์ชันที่เรียกใช้ตัวเองภายในนิยามของมันเอง เพื่อแก้ปัญหาย่อยที่มีลักษณะเหมือนปัญหาเดิมแต่ขนาดเล็กลง",
            "การประกาศตัวแปรซ้ำหลายครั้งในโปรแกรมเดียวกัน",
            "การเรียกใช้ฟังก์ชันอื่นที่ไม่เกี่ยวข้องกันสลับไปมา"
          ],
          "correct_index": 1,
          "explanation": "Recursion คือเทคนิคที่ฟังก์ชันเรียกใช้ตัวเองซ้ำๆ เพื่อแก้ปัญหาโดยแบ่งเป็นปัญหาย่อยที่มีลักษณะเดียวกันแต่ขนาดเล็กลงเรื่อยๆ จนกระทั่งถึงเงื่อนไขที่แก้ปัญหาได้โดยตรง แตกต่างจากลูป for/while ที่ทำงานซ้ำแบบวนภายในฟังก์ชันเดียว ไม่ใช่การเรียกฟังก์ชันตัวเองซ้อนกัน"
        },
        {
          "question": "องค์ประกอบใดที่ฟังก์ชัน Recursive ทุกตัวจำเป็นต้องมี เพื่อไม่ให้เกิดการเรียกซ้ำไม่รู้จบ",
          "options": [
            "Loop counter",
            "Base Case (เงื่อนไขหยุดการเรียกซ้ำ)",
            "Global variable",
            "Return type เป็น void เท่านั้น"
          ],
          "correct_index": 1,
          "explanation": "Base Case คือเงื่อนไขที่ทำให้ฟังก์ชันหยุดเรียกตัวเองและคืนค่ากลับโดยตรง หากขาด Base Case ฟังก์ชันจะเรียกตัวเองไปเรื่อยๆ ไม่มีที่สิ้นสุด ทุกฟังก์ชัน recursive ที่ถูกต้องจึงต้องมี Base Case อย่างน้อยหนึ่งเงื่อนไขเสมอ ควบคู่กับ Recursive Case ที่เรียกตัวเองด้วยปัญหาที่เล็กลง"
        },
        {
          "question": "หากฟังก์ชัน Recursive ไม่มี Base Case หรือ Base Case ไม่มีวันเป็นจริง จะเกิดผลลัพธ์ตามข้อใด",
          "options": [
            "โปรแกรมจะทำงานเร็วขึ้นเพราะไม่มีเงื่อนไขตรวจสอบ",
            "เกิดการเรียกซ้ำไม่รู้จบ (infinite recursion) และมักทำให้เกิด Stack Overflow ในที่สุด",
            "ฟังก์ชันจะคืนค่า null โดยอัตโนมัติ",
            "คอมไพเลอร์จะแก้ไขให้เองโดยเพิ่ม Base Case ให้อัตโนมัติ"
          ],
          "correct_index": 1,
          "explanation": "หากไม่มี Base Case ที่เป็นจริงได้ ฟังก์ชันจะเรียกตัวเองไปเรื่อยๆ ไม่สิ้นสุด แต่ละครั้งที่เรียกจะมีการสร้าง stack frame ใหม่เก็บไว้ใน call stack เมื่อ stack frame สะสมมากเกินขีดจำกัดของหน่วยความจำที่จัดสรรไว้ จะเกิด Stack Overflow และโปรแกรม crash"
        },
        {
          "question": "จงคำนวณค่า factorial(4) โดยใช้นิยาม factorial(n) = n × factorial(n-1) และ factorial(0) = 1",
          "options": [
            "12",
            "16",
            "24",
            "20"
          ],
          "correct_index": 2,
          "explanation": "ไล่ตามนิยาม: factorial(4) = 4×factorial(3) = 4×3×factorial(2) = 4×3×2×factorial(1) = 4×3×2×1×factorial(0) = 4×3×2×1×1 = 24 การ trace แบบนี้แสดงให้เห็นว่าฟังก์ชันเรียกตัวเองลดขนาดปัญหาลงเรื่อยๆ จนถึง Base Case (n=0) แล้วจึงค่อยๆ คูณค่ากลับขึ้นมาตามลำดับการ return"
        },
        {
          "question": "ในการทำงานของ Recursion แต่ละครั้งที่ฟังก์ชันเรียกตัวเอง ระบบจะใช้โครงสร้างข้อมูลใดในการจัดเก็บสถานะของการเรียกแต่ละครั้ง (เช่น ค่าตัวแปรท้องถิ่น และตำแหน่งที่ต้อง return กลับไป)",
          "options": [
            "Queue (Call Queue)",
            "Stack (Call Stack)",
            "Array แบบ static",
            "Hash Table"
          ],
          "correct_index": 1,
          "explanation": "ทุกครั้งที่มีการเรียกฟังก์ชัน (รวมถึงการเรียกตัวเองแบบ recursive) ระบบจะสร้าง stack frame ใหม่และ push ลงใน Call Stack เพื่อเก็บค่าตัวแปรท้องถิ่นและตำแหน่งที่ต้องกลับไป เมื่อฟังก์ชันทำงานเสร็จและ return ค่า stack frame นั้นจะถูก pop ออก ลักษณะการทำงานแบบ LIFO นี้จึงสอดคล้องพอดีกับการเรียกซ้ำที่ต้องกลับมาทำงานต่อจากจุดที่ค้างไว้ตามลำดับย้อนกลับ"
        },
        {
          "question": "ข้อใดคือข้อเสียของการใช้ Recursion เมื่อเทียบกับการใช้ Iteration (ลูป for/while) ในการแก้ปัญหาเดียวกัน",
          "options": [
            "Recursion อ่านโค้ดเข้าใจยากกว่า Iteration เสมอในทุกกรณี",
            "Recursion มักใช้หน่วยความจำมากกว่า เนื่องจากต้องสร้าง stack frame สะสมในแต่ละการเรียก และมีความเสี่ยงต่อการเกิด Stack Overflow หากเรียกซ้ำลึกเกินไป",
            "Recursion ไม่สามารถนำมาใช้แก้ปัญหาทางคณิตศาสตร์ได้",
            "Recursion ทำงานได้เฉพาะกับข้อมูลชนิดตัวเลขเท่านั้น"
          ],
          "correct_index": 1,
          "explanation": "แม้ Recursion มักทำให้โค้ดสั้นและสื่อความหมายได้ดีสำหรับปัญหาที่มีลักษณะแบ่งย่อยได้ (เช่น Tree, Divide and Conquer) แต่ข้อเสียคือแต่ละการเรียกตัวเองต้องสร้าง stack frame ใหม่เก็บไว้ใน call stack ทำให้ใช้หน่วยความจำมากกว่า Iteration ที่ใช้เพียงตัวแปรควบคุมลูป และหากเรียกซ้ำลึกมากเกินไปอาจทำให้เกิด Stack Overflow ได้"
        },
        {
          "question": "กำหนดนิยาม fibonacci(n) โดย fibonacci(0)=0, fibonacci(1)=1 และ fibonacci(n) = fibonacci(n-1) + fibonacci(n-2) จงหาค่า fibonacci(5)",
          "options": [
            "3",
            "5",
            "8",
            "13"
          ],
          "correct_index": 1,
          "explanation": "ไล่ค่าตามลำดับ: fibonacci(0)=0, fibonacci(1)=1, fibonacci(2)=fibonacci(1)+fibonacci(0)=1+0=1, fibonacci(3)=fibonacci(2)+fibonacci(1)=1+1=2, fibonacci(4)=fibonacci(3)+fibonacci(2)=2+1=3, fibonacci(5)=fibonacci(4)+fibonacci(3)=3+2=5 ดังนั้น fibonacci(5) มีค่าเท่ากับ 5"
        },
        {
          "question": "Tail Recursion คืออะไร และมีข้อดีอย่างไรเมื่อเทียบกับ Recursion แบบทั่วไป",
          "options": [
            "คือการเรียกฟังก์ชันตัวเองเป็นคำสั่งสุดท้ายในฟังก์ชัน โดยไม่มีการประมวลผลใดๆ หลังจากนั้นอีก ทำให้บาง compiler สามารถ optimize ให้ไม่ต้องสร้าง stack frame ใหม่ซ้อนกันได้ (tail call optimization)",
            "คือการเรียกฟังก์ชันตัวเองที่จุดเริ่มต้นของฟังก์ชันเสมอ",
            "คือการเรียก recursion ที่ไม่มี Base Case",
            "คือการเรียก recursion ที่ใช้ได้เฉพาะกับข้อมูลชนิด String เท่านั้น"
          ],
          "correct_index": 0,
          "explanation": "Tail Recursion คือรูปแบบที่การเรียกตัวเองเป็นคำสั่งสุดท้ายของฟังก์ชัน โดยไม่มีการคำนวณเพิ่มเติมหลังจากผลลัพธ์ของการเรียกซ้ำถูก return กลับมา ลักษณะนี้ทำให้บาง compiler หรือ interpreter สามารถทำ Tail Call Optimization ได้ คือนำ stack frame เดิมมาใช้ซ้ำแทนที่จะสร้างใหม่ซ้อนกันเรื่อยๆ ช่วยลดการใช้หน่วยความจำและความเสี่ยงต่อ Stack Overflow"
        },
        {
          "type": "fill_blank",
          "question": "เงื่อนไขที่ทำให้ฟังก์ชัน Recursive หยุดเรียกตัวเองและ return ค่ากลับโดยตรง เรียกว่าอะไร (ตอบเป็นภาษาอังกฤษ 2 คำ)",
          "answer": "Base Case",
          "accepted_answers": ["Base Case", "base case", "Base case", "basecase"],
          "explanation": "Base Case คือเงื่อนไขหยุดของฟังก์ชัน Recursive ที่ทำให้ฟังก์ชันคืนค่าออกมาได้โดยตรงโดยไม่ต้องเรียกตัวเองต่อ หากขาดองค์ประกอบนี้จะเกิด Infinite Recursion และ Stack Overflow ในที่สุด"
        },
        {
          "type": "fill_blank",
          "question": "จงคำนวณค่า factorial(5) โดยใช้นิยาม factorial(n) = n × factorial(n-1) และ factorial(0) = 1 (ตอบเป็นตัวเลข)",
          "answer": "120",
          "accepted_answers": ["120"],
          "explanation": "ไล่ตามนิยาม: factorial(5) = 5×4×3×2×1×factorial(0) = 5×4×3×2×1×1 = 120 เป็นตัวอย่างคลาสสิกของ Recursion ที่ลดขนาดปัญหาลงทีละ 1 จนถึง Base Case ที่ n=0 แล้วจึงทยอยคูณค่ากลับขึ้นมาตามลำดับการ return"
        },
          {
    "question": "Direct Recursion และ Indirect Recursion แตกต่างกันอย่างไร",
    "options": [
      "Direct Recursion คือฟังก์ชันเรียกตัวเองโดยตรงภายในนิยามของมันเอง ส่วน Indirect Recursion คือฟังก์ชัน A เรียกฟังก์ชัน B แล้ว B ย้อนกลับมาเรียก A อีกที (ผ่านฟังก์ชันอื่นเป็นตัวกลาง)",
      "Direct Recursion ใช้ได้กับตัวเลขเท่านั้น ส่วน Indirect Recursion ใช้ได้กับ String เท่านั้น",
      "ทั้งสองแบบมีความหมายเหมือนกันทุกประการ",
      "Direct Recursion ไม่มี Base Case ส่วน Indirect Recursion มี Base Case เสมอ"
    ],
    "correct_index": 0,
    "explanation": "Direct Recursion คือรูปแบบที่คุ้นเคยที่สุด คือฟังก์ชันเรียกใช้ตัวเองตรงๆ ภายในนิยามของมันเอง (เช่น factorial เรียก factorial) ส่วน Indirect Recursion คือฟังก์ชัน A เรียกฟังก์ชัน B และฟังก์ชัน B เรียกกลับมาที่ A อีกครั้ง (หรือผ่านฟังก์ชัน C เป็นทอดๆ) ทำให้เกิดวงจรการเรียกซ้ำที่ซับซ้อนกว่าแบบ Direct"
  },
  {
    "question": "Recursion Tree (แผนภาพต้นไม้การเรียกซ้ำ) มีประโยชน์อย่างไรในการวิเคราะห์ฟังก์ชัน Recursive",
    "options": [
      "ใช้บอกจำนวนบรรทัดโค้ดของฟังก์ชันเท่านั้น",
      "ใช้แสดงลำดับและโครงสร้างของการเรียกฟังก์ชันตัวเองซ้ำๆ ในรูปแบบต้นไม้ ช่วยให้เห็นภาพรวมของจำนวนครั้งที่ถูกเรียกและช่วยวิเคราะห์ Time Complexity ได้ง่ายขึ้น",
      "ใช้แทนที่ Flowchart ในทุกสถานการณ์",
      "ใช้ได้เฉพาะกับฟังก์ชันที่ไม่มี Base Case เท่านั้น"
    ],
    "correct_index": 1,
    "explanation": "Recursion Tree คือแผนภาพที่แสดงให้เห็นว่าฟังก์ชัน recursive ถูกเรียกซ้ำอย่างไรในแต่ละขั้น โดยแต่ละ node ในต้นไม้แทนการเรียกฟังก์ชันหนึ่งครั้ง และกิ่งก้านแสดงการเรียกฟังก์ชันย่อยที่เกิดขึ้นภายใน ช่วยให้เห็นภาพรวมของจำนวนครั้งที่ฟังก์ชันถูกเรียกทั้งหมด ซึ่งเป็นประโยชน์อย่างมากในการวิเคราะห์ Time Complexity ของฟังก์ชัน recursive โดยเฉพาะแบบที่เรียกตัวเองมากกว่าหนึ่งครั้งต่อขั้น เช่น fibonacci"
  },
  {
    "question": "กำหนดฟังก์ชัน sum(n) = n + sum(n-1) และ sum(0) = 0 จงหาค่า sum(4)",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "correct_index": 2,
    "explanation": "ไล่ตามนิยาม: sum(4) = 4+sum(3) = 4+3+sum(2) = 4+3+2+sum(1) = 4+3+2+1+sum(0) = 4+3+2+1+0 = 10 เป็นตัวอย่างการ trace recursion ทีละขั้นจนถึง Base Case แล้วจึงบวกค่ากลับขึ้นมาตามลำดับการ return"
  },
  {
    "question": "ฟังก์ชัน Recursive ที่เรียกตัวเองมากกว่าหนึ่งครั้งในแต่ละขั้นตอน (เช่น fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)) จัดเป็น Recursion ประเภทใด",
    "options": [
      "Linear Recursion",
      "Tail Recursion",
      "Tree Recursion (หรือ Multiple Recursion)",
      "Indirect Recursion"
    ],
    "correct_index": 2,
    "explanation": "Tree Recursion (หรือเรียกว่า Multiple Recursion) คือรูปแบบที่ฟังก์ชันเรียกตัวเองมากกว่าหนึ่งครั้งในแต่ละขั้นตอน เช่น fibonacci ที่เรียกตัวเองสองครั้ง (n-1 และ n-2) ทำให้เมื่อวาด Recursion Tree ออกมาจะเห็นกิ่งก้านแตกแขนงออกไปหลายทาง ต่างจาก Linear Recursion ที่เรียกตัวเองเพียงครั้งเดียวต่อขั้น เช่น factorial"
  },
  {
    "question": "Recursion เหมาะสมและมีข้อดีเป็นพิเศษเมื่อนำไปใช้แก้ปัญหาประเภทใด",
    "options": [
      "ปัญหาที่ต้องใช้หน่วยความจำน้อยที่สุดเท่าที่เป็นไปได้เท่านั้น",
      "ปัญหาที่มีลักษณะแบ่งเป็นปัญหาย่อยที่มีโครงสร้างเหมือนปัญหาเดิมแต่ขนาดเล็กลงได้อย่างเป็นธรรมชาติ เช่น Tower of Hanoi หรือการเดินสำรวจ Tree",
      "ปัญหาที่ต้องการความเร็วสูงสุดในทุกกรณีโดยไม่มีข้อยกเว้น",
      "ปัญหาที่ไม่มี Base Case ที่ชัดเจน"
    ],
    "correct_index": 1,
    "explanation": "จุดแข็งของ Recursion คือการสื่อความหมายของปัญหาที่มีโครงสร้างแบ่งเป็นปัญหาย่อยที่คล้ายกันได้อย่างเป็นธรรมชาติ เช่น Tower of Hanoi ที่แต่ละขั้นคือการย้ายแผ่นดิสก์จำนวนน้อยลง หรือการเดินสำรวจโครงสร้าง Tree ที่แต่ละ subtree มีลักษณะเหมือน tree เดิมแต่เล็กลง ทำให้โค้ด recursive มักกระชับและเข้าใจง่ายกว่าการเขียนด้วย iteration ล้วนๆ แม้จะไม่ได้เหมาะกับทุกปัญหาหรือเร็วที่สุดเสมอไปก็ตาม"
  },
  {
    "question": "หากต้องการแปลงฟังก์ชัน Recursive ให้เป็น Iterative (ใช้ลูปแทน) โดยยังคงพฤติกรรมการทำงานเหมือนเดิม มักใช้โครงสร้างข้อมูลใดช่วยจำลองการทำงานของ Call Stack",
    "options": [
      "Queue",
      "Stack (explicit stack ที่สร้างขึ้นเอง)",
      "Array แบบเรียงลำดับ",
      "Hash Table"
    ],
    "correct_index": 1,
    "explanation": "เนื่องจาก Recursion ใช้ Call Stack ของระบบในการจัดการสถานะการเรียกแต่ละครั้งอยู่แล้ว การแปลงเป็น Iterative จึงมักใช้ Stack ที่สร้างขึ้นเอง (explicit stack) ในการจำลองพฤติกรรม push/pop สถานะแทนการเรียกฟังก์ชันซ้อนกันจริงๆ ทำให้ควบคุมการใช้หน่วยความจำได้ดีขึ้นและหลีกเลี่ยงความเสี่ยงจาก Stack Overflow ของระบบ"
  },
  {
    "question": "กำหนดฟังก์ชัน power(base, exp) = base × power(base, exp-1) และ power(base, 0) = 1 จงหาค่า power(2, 3)",
    "options": [
      "4",
      "6",
      "8",
      "9"
    ],
    "correct_index": 2,
    "explanation": "ไล่ตามนิยาม: power(2,3) = 2×power(2,2) = 2×2×power(2,1) = 2×2×2×power(2,0) = 2×2×2×1 = 8 เป็นตัวอย่างการยกกำลังด้วยหลักการ recursion ที่ลดค่า exponent ลงทีละ 1 จนถึง Base Case ที่ exp=0"
  },
  {
    "question": "ข้อใดคือปัญหาคลาสสิกที่นิยมใช้ Recursion ในการแก้ไข เนื่องจากมีโครงสร้างที่เหมาะกับการแบ่งเป็นปัญหาย่อยแบบเดียวกัน",
    "options": [
      "การเรียงลำดับข้อมูลด้วย Bubble Sort",
      "Tower of Hanoi (ปัญหาหอคอยฮานอย)",
      "การค้นหาค่ามากที่สุดใน Array แบบ linear scan",
      "การนับจำนวนสมาชิกใน Array"
    ],
    "correct_index": 1,
    "explanation": "Tower of Hanoi เป็นตัวอย่างคลาสสิกที่สุดของปัญหาที่เหมาะกับ Recursion เพราะการย้ายแผ่นดิสก์ n แผ่นจากเสาหนึ่งไปอีกเสาหนึ่งสามารถแบ่งเป็นปัญหาย่อย 3 ขั้นตอนคือ ย้าย n-1 แผ่นบนไปเสาช่วย, ย้ายแผ่นที่ n ไปเสาปลายทาง, แล้วย้าย n-1 แผ่นจากเสาช่วยไปเสาปลายทาง ซึ่งแต่ละขั้นย่อยมีลักษณะเหมือนปัญหาเดิมทุกประการเพียงแต่ขนาดเล็กลง สอดคล้องกับหลักการของ Recursion โดยตรง"
  },
  {
    "type": "fill_blank",
    "question": "ฟังก์ชัน Recursive ที่เรียกตัวเองมากกว่าหนึ่งครั้งในแต่ละขั้นตอน (เช่นในฟังก์ชัน fibonacci) จัดเป็น Recursion ประเภทใด (ตอบเป็นภาษาอังกฤษ)",
    "answer": "Tree Recursion",
    "accepted_answers": ["Tree Recursion", "tree recursion", "Multiple Recursion", "multiple recursion"],
    "explanation": "เรียกว่า Tree Recursion หรือ Multiple Recursion เพราะเมื่อวาดแผนภาพการเรียกซ้ำออกมาจะเห็นกิ่งก้านแตกแขนงออกไปหลายทางเหมือนต้นไม้ ต่างจาก Linear Recursion ที่เรียกตัวเองเพียงครั้งเดียวต่อขั้น"
  },
  {
    "type": "fill_blank",
    "question": "กำหนดฟังก์ชัน sum(n) = n + sum(n-1) และ sum(0) = 0 จงหาค่า sum(6) (ตอบเป็นตัวเลข)",
    "answer": "21",
    "accepted_answers": ["21"],
    "explanation": "ไล่ตามนิยาม: sum(6) = 6+5+4+3+2+1+sum(0) = 6+5+4+3+2+1+0 = 21 เป็นการรวมค่าจำนวนเต็มตั้งแต่ 1 ถึง 6 โดยใช้หลักการ recursion ที่ลดค่า n ลงทีละ 1 จนถึง Base Case ที่ n=0"
  }
      ]
    }
  ]
};
