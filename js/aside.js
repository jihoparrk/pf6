$(document).ready(
    function(){
        $("aside a.top").click(
            function(){
                $("html, body").animate({scrollTop:"520px"},1000); //수치변환 속성값을 애니메이트
                return false;
            }
        );
    }
);
