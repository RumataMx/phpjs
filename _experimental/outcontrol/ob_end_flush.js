function ob_end_flush () {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: ob_end_flush();
    // *     returns 1: true
    
    if (!this.php_js || !this.php_js.obs || !this.php_js.obs.length) {
        return false;
    }
    var contents = this.php_js.obs[this.php_js.obs.length-1].buffer;
    this.php_js.obs.pop();
    this.echo(contents);

    return true;
}