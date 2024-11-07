export class RegexUtils{
     public static regexGetOnlyNumbers(value:String){
        return Number((value.match(/\d+/g) as unknown as Array<number>)[0]);
    }
}