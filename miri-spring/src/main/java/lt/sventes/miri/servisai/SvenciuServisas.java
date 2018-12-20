package lt.sventes.miri.servisai;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.sventes.miri.db.SvenciuRepozitorija;
import lt.sventes.miri.db.SventesDb;

@Service
public class SvenciuServisas {

	@Autowired
	private SvenciuRepozitorija svenciuRepozitorija;
	
	@Transactional(readOnly = true)
	public List<SventesOfService> getSventes() {
		return svenciuRepozitorija.findAll().stream().map((sventedDb) ->
				new SventesOfService(sventedDb.getPictureId(),
						sventedDb.getTitleVal(),
						sventedDb.getDescVal(),
						sventedDb.getTypeVal()
    			)).collect(Collectors.toList());
    }

	@Transactional
	public void createSvente(SventesOfService svente) {
		SventesDb naujaSvente = new SventesDb();
		
		naujaSvente.setPictureId(svente.getPicture());
		naujaSvente.setDescVal(svente.getDescription());
		naujaSvente.setTitleVal(svente.getTitle());
		naujaSvente.setTypeVal(svente.getType());
		
		svenciuRepozitorija.save(naujaSvente);
	}
	
	public SvenciuRepozitorija getSvenciuRepozitorija() {
		return svenciuRepozitorija;
	}

	public void setSvenciuRepozitorija(SvenciuRepozitorija svenciuRepozitorija) {
		this.svenciuRepozitorija = svenciuRepozitorija;
	}
	
}