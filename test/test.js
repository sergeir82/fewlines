(function($){
    $(document).ready(function(){
        var standard = $('#standard').height(),
            standard_bold = $('#standard-bold').height(),
            standard_large = $('#standard-large').height(),
            standard_sans = $('#standard-sans').height();

        var setTestHeader = function(sample, header){
            if(header){
                $('<h2>').append(header).insertBefore(sample);
            }
            return header;
        };

        test("Fewlines plugin test case", function() {
            var sample, text;
            var sample1 = $('#sample-1');

            sample1.fewlines();
            ok( sample1.height() == 2 * standard, setTestHeader( sample1, 'Basic test: font-size:'+sample1.css('font-size')+', font-weight:'+sample1.css('font-weight')));

            sample = $('#sample-2');
            text = sample.text();
            sample.fewlines();
            ok( sample.height() == standard && text == sample.text(), setTestHeader( sample, 'The text is not enough to cut: font-size:'+sample.css('font-size')+', font-weight:'+sample.css('font-weight')) );

            sample = $('#sample-3');
            sample.fewlines({'lines':4});
            ok( sample.height() == 4 * standard, setTestHeader( sample, '4 lines of text: font-size:'+sample.css('font-size')+', font-weight:'+sample.css('font-weight')) );

            sample = $('#sample-4');
            sample.fewlines();
            ok( sample.height() == 2 * standard_bold, setTestHeader( sample, 'Bold text: font-size:'+sample.css('font-size')+', font-weight:'+sample.css('font-weight')) );

            sample = $('#sample-5');
            sample.fewlines();
            ok( sample.height() == 2 * standard_large, setTestHeader( sample, 'Font size is larger than the document default font size: font-size:'+sample.css('font-size')+', font-weight:'+sample.css('font-weight')) );

            sample = $('#sample-6');
            sample.fewlines();
            ok( sample.height() == 2 * standard, setTestHeader( sample, 'Padding in text container: padding:'+sample.css('padding')+', font-size:'+sample.css('font-size')+', font-weight:'+sample.css('font-weight')) );

            sample = $('#sample-7');
            sample.fewlines();
            ok( sample.height() == 2 * standard_sans, setTestHeader( sample, 'Monospace font test: font-size:'+sample.css('font-size')+', font-weight:'+sample.css('font-weight')) );

            sample = $('#sample-8');
            sample.fewlines({'openMark': 'some open mark'});
            ok( sample.height() == 2 * standard, setTestHeader( sample, 'Open mark test: font-size:'+sample.css('font-size')+', font-weight:'+sample.css('font-weight')) );

            sample = $('#sample-9');
            sample.fewlines({'openMark': 'open', 'newLine': true});
            ok( sample.height() == 3 * standard, setTestHeader( sample, 'Open mark on new line: font-size:'+sample.css('font-size')+', font-weight:'+sample.css('font-weight')) );

            sample = $('#sample-10');
            $('>div', sample).fewlines();
            ok( sample.height() == 2 * standard, setTestHeader( sample, 'Text container width is calculated: width:'+$('>div', sample).width()+'px, padding:'+sample.css('padding')+', font-size:'+sample.css('font-size')+', font-weight:'+sample.css('font-weight')) );
        });

    });
})(jQuery);