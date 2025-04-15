package hn.unah.backend.models;

import java.io.Serializable;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SeguidorId implements Serializable{

    private int seguidor;
    private int seguido;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SeguidorId)) return false;
        SeguidorId that = (SeguidorId) o;
        return Objects.equals(seguidor, that.seguidor) &&
               Objects.equals(seguido, that.seguido);
    }

    @Override
    public int hashCode() {
        return Objects.hash(seguidor, seguido);
    }
    
}
